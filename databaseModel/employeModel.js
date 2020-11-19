var mongoose=require('mongoose');


var employeSchema=mongoose.Schema({
         name:{type:String,required:true},
         designation:{type:String,required:true},
         salary:{type:Number,required:true},
         specialization:{type:String,required:true},
        
});

var employeModel=mongoose.model('employes',employeSchema);
module.exports=employeModel;



