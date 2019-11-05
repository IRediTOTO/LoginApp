var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Project1',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, db) => {
    if (err) throw err;
    var dbo = db.db("Project1");
    dbo.collection('feedbacks').aggregate([{
        $lookup: {
            from: 'products',
            localField: 'productID',
            foreignField: '_id',
            as: 'feedbackDetails'
        }
    }]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});

