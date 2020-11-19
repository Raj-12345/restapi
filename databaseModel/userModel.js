var mongoose=require('mongoose');


var userSchema=mongoose.Schema({
         firstname:{type:String,required:true},
         lastname:{type:String,required:true},
         email:{type:String,required:true},
         password:{type:String,required:true},
         confirmpassword:{type:String,required:true},
         city:{type:String,required:true},
         state:{type:String,required:true},
         zip:{type:String,required:true}
});

var userModel=mongoose.model('users',userSchema);
module.exports=userModel;



