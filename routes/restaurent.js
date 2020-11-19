
var express = require('express');
var router = express.Router();
var restaurentuserModel = require('../databaseModel/restaurentusermodel');



// router.get('/users', function (req, res, next) {
//     console.log(req.body);
   
//     restaurentuserModel.find({},(err, result) => {
//       if (err) {
//         throw err;
//       }
//       res.statusCode = 200;
//       res.json(result);
//     })
  
//   });

  router.post('/checkuser', function (req, res, next) {

    console.log(req.body);
    let email=req.body.email;
    let password=req.body.password;
    restaurentuserModel.findOne({email:email,password:password},(err, result) => {
       if (err) {
         throw err;
       }
       else{
           console.log(result);
        if(result!=null)
        {
            res.statusCode = 200;
            res.json({status:"user  exists",flag:true});
            
        }
        else
        {
            res.statusCode = 200;
            res.json({status:"user not exists",flag:false});
 
        }
       }
     })
  console.log(req.body);


});



// storing task
router.post('/user', function (req, res, next) {

    console.log(req.body);
    let email=req.body.email;
    restaurentuserModel.findOne({email:email},(err, result) => {
       if (err) {
         throw err;
       }
       else{
           console.log(result);
        if(result!=null)
        {
            res.statusCode = 200;
            res.json({status:"user already exists",flag:false});
        }
        else
        {
            var user = new restaurentuserModel(
                { 
                     name:req.body.name,
                     email:req.body.email,
                     password:req.body.password,
                     confirmpassword:req.body.confirmpassword,
                  
                }
              )
              user.save(res).then((result)=>{
                  res.statusCode = 200;
                  res.json({ status: "user inserted sucesfully !!!!",flag:true});
              }).catch(err => {
                 throw err;
              })

        }
       }
     })
  console.log(req.body);


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