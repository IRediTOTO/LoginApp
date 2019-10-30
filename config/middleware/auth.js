
let checkLogin = (req, res, next) =>  {
  if (req.isAuthenticated()) {
    return next();
  };
  return res.redirect("/login");
}

let isAdmin = (req, res, next) =>  {
  if( req.user.type == 1){
    next()
  }else{
    next({err: 'khong phaiadmin'})
  }
}

// manager + admin
let isManager = (req, res, next) =>  {
  if( req.user.type <= 2){
    next()
  }else{
    next({err: 'role must manger tro len'})
  }
}



module.exports = {
  checkLogin
};