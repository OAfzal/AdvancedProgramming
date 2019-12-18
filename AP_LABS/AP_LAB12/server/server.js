var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/',function(req,res){
    res.send("Hello World");
})

app.post('/',function(req,res){
    var data = req.body;
    console.log(data);
    if(data.name == 'admin' && data.password == 'admin'){
        res.send("Succ");
    }
    else{
        res.send("failed");
    }
});

app.listen(5000);
