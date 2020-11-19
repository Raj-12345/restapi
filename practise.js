 var http=require('http');
var express=require('express');
var app=express();
var moment = require('moment'); // require

// http.createServer(function(req, res){
//       if(req.url==='/'){
//             var html = fs.readFileSync(__dirname+ '/data.html');
//             fs.createReadStream(__dirname+ '/data.html').pipe(res);
//             }
//             else if(req.url==='/submit')
//             {
//                 console.log("Hi");
//                 var html = fs.readFileSync(__dirname+ '/data.html');
//             fs.createReadStream(__dirname+ '/data.html').pipe(res);
//             }
            
//            else if(req.url==='/api'){
//                 res.writeHead(200, {'Content-Type':'application/json'})
            
//             //var html = fs.readFileSync(__dirname+ '/data.html');
//             var msg = {
//                 firstName : "Raj",
//                 lastName : "MALVIYA"
//             }
            
//           //  html  = msg.toString().replace('{heading}', msg)
        
          
//             res.end(JSON.stringify(msg));
        
//             }
//             else{
//                 res.writeHead('404');
                
//                 res.end();
//             }
// }).listen(4500);


// var array=[{name:'raj'},{name:'khan'},{name:'bhai'}];
// console.log(array);
// console.log(array.indexOf({name:'raj'}));


// var array1=['raj','khan','bhai'];
// console.log(array1);
// console.log(array1.indexOf('raj'));


//  http.createServer(function(req, res){
//      res.writeHead(200,{contentType:"text/plain"});
//      res.end('Hello');
//  }).listen(3500,'localhost',()=>{console.log("server statterd listning")});


app.listen(4000);
app.get('/', function(req, res){
    res.end(moment().format());


})