var express = require('express');
var app = express();

var PORT = 3000;  // upper case variable names signifies constant and should not be changed
var middleware = {
  requireAuthentication: function(req,res,next){
             console.log('private route hit');
             next();
             
  },
  logger: function(req,res,next){
          

               console.log(req.method + ' '+ req.originalUrl+ ' '+ new Date().toString());
               next();
               
  }
};
//app.use(middleware.requireAuthentication); //application level middle ware
app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function (req,res) {
          res.send('about US!');
});
app.use(express.static(__dirname+'/public'));
//console.log(__dirname);

app.listen(PORT,function () {
       console.log('express server started at port : '+ PORT);
          
});