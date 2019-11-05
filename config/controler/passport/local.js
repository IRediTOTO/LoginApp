const passport = require("passport");
const passportLocal = require("passport-local");
const User = require("../../../DB/models/usersModel");
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;

let LocalStragery = passportLocal.Strategy;


let initPassportLocal = () => {
  passport.use(
    new LocalStragery({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      async (req, email, password, done) => {
        try {
          let user = await User.findOne({
            email,
            password
          }).exec();
          console.log("day la user: ",user)
          if (!user) {
            return done(null, false);
          }else {user = user.toObject()}
          return done(null, user);
        } catch (error) {
          console.log("day la loi: ",error);
          return done(null, false);
        }
      }
    )
  )

  passport.use(new JWTStrategy({
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret'
    },
    function (jwtPayload, cb) {

      //cần fix kết nối data
      return User.findById(jwtPayload.id)
        .then(user => {
          user = user.toObject()
          return cb(null, user);
        })
        .catch(err => {
          return cb(err);
        });
    }
  ));


}


module.exports = initPassportLocal;