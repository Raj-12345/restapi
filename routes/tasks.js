var express = require('express');
var router = express.Router();
var TaskModel = require('../databaseModel/taskModel');


// getting all pending task
router.get('/getpendingtask/:page', function (req, res) {
  let page = req.params.page;

  let skip = page * 5 - 5;        //here  calulating skip value 

  TaskModel.find({ status: "pending" }, (err, task) => {
    if (err) {
      throw err;
    }
    res.statusCode = 200;
    res.json(task);
  }).limit(5).skip(skip)   //if page 1 skip 0 if page 2 skip 10  if page 3 skip 20....


})

// getting all completed task
router.get('/getcompletedtask/:page', function (req, res) {
  let page = req.params.page;

  let skip = page * 10 - 10;        //here  calulating skip value 

  TaskModel.find({ status: "completed" }, (err, task) => {
    if (err) {
      throw err;
    }
    res.statusCode = 200;
    res.json(task);
  }).limit(10).skip(skip)   //if page 1 skip 0 if page 2 skip 10 ....


})

// storing task
router.post('/task', function (req, res, next) {
  console.log(req.body);
  var task = new TaskModel(
    {
      task: req.body.task,
      status: req.body.status,
      isDeleted: req.body.isDeleted
    }
  )
  task.save((err, result) => {
    if (err) {
      throw err;
    }
    res.statusCode = 200;
    res.json({ status: "task inserted sucesfully !!!!"});
  })

});

// deleting the task based on _id
router.delete('/deletetask/:_id', function (req, res, next) {
  let _id = req.params._id;
  TaskModel.findByIdAndDelete({ _id: _id }, function (err, result) {

    if (err) {
      throw err;
    }
    res.statusCode = 202;
    res.json({ status: "task deleted sucesfully !!!!" });
  })

});

// updating the task based on _id
router.put('/updatetask/:_id', function (req, res, next) {
  let _id = req.params._id;
  let update=req.body;
  TaskModel.findByIdAndUpdate({ _id: _id },update, function (err, result) {
    if (err) {
      throw err;
    }
    res.statusCode = 202;
    res.json({ status: "task updated from pending to completed" });
  })

});

module.exports = router;