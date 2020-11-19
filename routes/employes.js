
var express = require('express');
var router = express.Router();
var employeModel = require('../databaseModel/employeModel');
const limitno = 5;


// router.get('/employes', function (req, res, next) {
//     console.log(req.body);

//     employeModel.find({},(err, result) => {
//       if (err) {
//         throw err;
//       }
//       res.statusCode = 200;
//       res.json(result);
//     })

//   });

router.get('/employes/:page', function (req, res) {
  let page = req.params.page;

  let skip = page * limitno - limitno;        //here  calulating skip value 

  employeModel.find({}).limit(limitno).skip(skip).
  then((task) => { 
           if(task.length===0)
           {
                res.json({status:"No data Found!!!"})
           }
           else
           {
              res.json(task);
           }
  
  }).
  catch((err) => { res.json(err); })   //if page 1 skip 0 if page 2 skip 10  if page 3 skip 20....


})



router.get('/employes/sum', function (req, res, next) {
  console.log(req.body);
  let _id = req.params._id;
  employeModel.aggregate([{ $group: { _id: "$designation", salary: { $sum: "$salary" } } }]).exec().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});
router.get('/employes/min', function (req, res, next) {
  console.log(req.body);
  let _id = req.params._id;
  employeModel.aggregate([{ $group: { _id: "$designation", salary: { $min: "$salary" } } }]).exec().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});
router.get('/employes/max', function (req, res, next) {
  console.log(req.body);
  let _id = req.params._id;
  employeModel.aggregate([{ $group: { _id: "$designation", salary: { $max: "$salary" } } }]).exec().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});
router.get('/employes/avg', function (req, res, next) {
  console.log(req.body);
  let _id = req.params._id;
  employeModel.aggregate([{ $group: { _id: "$designation", salary: { $avg: "$salary" } } }]).exec().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});
router.get('/employes/push', function (req, res, next) {
  console.log(req.body);
  let _id = req.params._id;
  employeModel.aggregate([{ $group: { _id: "$designation", specialization: { $push: "$specialization" } } }]).exec().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});
router.get('/employes/addtoset', function (req, res, next) {
  console.log(req.body);
  let _id = req.params._id;
  employeModel.aggregate([{ $group: { _id: "$designation", specialization: { $addToSet: "$specialization" } } }]).exec().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});
router.get('/employes/first', function (req, res, next) {
  console.log(req.body);
  let _id = req.params._id;
  employeModel.aggregate([{ $group: { _id: "$specialization", salary: { $first: "$salary" } } }]).exec().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});
router.get('/employes/last', function (req, res, next) {
  console.log(req.body);
  let _id = req.params._id;
  employeModel.aggregate([{ $group: { _id: "$specialization", salary: { $last: "$salary" } } }]).exec().then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});



// storing task
router.post('/employe', function (req, res, next) {
  console.log(req.body);
  var employe = new employeModel(
    {
      name: req.body.name,
      designation: req.body.designation,
      salary: parseInt(req.body.salary),
      specialization: req.body.specialization,

    }
  )
  employe.save((err, result) => {
    if (err) {
      throw err;
    }
    res.statusCode = 200;
    res.json({ status: "employe inserted sucesfully !!!!" });
  })

});

// deleting the task based on _id
// router.delete('/deleteuser/:_id', function (req, res, next) {
//   let _id = req.params._id;
//   userModel.findByIdAndDelete({ _id: _id }, function (err, result) {

//     if (err) {
//       throw err;
//     }
//     res.statusCode = 202;
//     res.json({ status: "user deleted sucesfully !!!!" });
//   })

// });

// // updating the task based on _id
// router.put('/updatetask/:_id', function (req, res, next) {
//   let _id = req.params._id;
//   let update=req.body;
//   TaskModel.findByIdAndUpdate({ _id: _id },update, function (err, result) {
//     if (err) {
//       throw err;
//     }
//     res.statusCode = 202;
//     res.json({ status: "task updated from pending to completed" });
//   })

// });

module.exports = router;