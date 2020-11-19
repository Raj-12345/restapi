var mongoose=require('mongoose');


var taskSchema=mongoose.Schema({
         task:{type:String,required:true},
         status:{type:String,required:true},
         isDeleted:{type:Boolean,required:true}
});

var taskModel=mongoose.model('tasks',taskSchema);
module.exports=taskModel;



