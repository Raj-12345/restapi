
var express = require('express');
var router = express.Router();
var userModel = require('../databaseModel/userModel');



router.get('/users', function (req, res, next) {
    console.log(req.body);
   
    userModel.find({},(err, result) => {
      if (err) {
        throw err;
      }
      res.statusCode = 200;
      res.json(result);
    })
  
  });


router.get('/viewuser/:_id', function (req, res, next) {
    console.log(req.body);
   let _id=req.params._id;
    userModel.findOne({_id:_id},(err, result) => {
      if (err) {
        throw err;
      }
      res.statusCode = 200;
      res.json(result);
    })
  
  });



// storing task
router.post('/users', function (req, res, next) {
  console.log(req.body);
  var user = new userModel(
    {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip
    }
  )
  user.save((err, result) => {
    if (err) {
      throw err;
    }
    res.statusCode = 200;
    res.json({ status: "user inserted sucesfully !!!!"});
  })

});

// deleting the task based on _id
router.delete('/deleteuser/:_id', function (req, res, next) {
  let _id = req.params._id;
  userModel.findByIdAndDelete({ _id: _id }, function (err, result) {

    if (err) {
      throw err;
    }
    res.statusCode = 202;
    res.json({ status: "user deleted sucesfully !!!!" });
  })

});

// updating the task based on _id
router.put('/updateuser/:_id', function (req, res, next) {
  let _id = req.params._id;
  let update=req.body;
  userModel.findByIdAndUpdate({ _id: _id },update, function (err, result) {
    if (err) {
      throw err;
    }
    res.statusCode = 202;
    res.json({ status: "user updated done" });
  })

});

module.exports = router;