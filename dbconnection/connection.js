var mongoose=require('mongoose');

mongoose.connect("mongodb+srv://Raj:Khandwa12345@cluster0.se5eg.mongodb.net/Restaurant?retryWrites=true&w=majority",{useNewUrlParser:true});
var connection=mongoose.connection;

connection.on('open',()=>{
    console.log("connection done");
})
connection.on('close',()=>{
    console.log("connection close");
})