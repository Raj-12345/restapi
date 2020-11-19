var mongoose=require('mongoose');


var restaurenttUserSchema=mongoose.Schema({
         name:{type:String,required:true},
          email:{type:String,required:true},
         password:{type:String,required:true},
         confirmpassword:{type:String,required:true},
       
});

var restaurentuserModel=mongoose.model('restaurentusers',restaurenttUserSchema);
module.exports=restaurentuserModel;



