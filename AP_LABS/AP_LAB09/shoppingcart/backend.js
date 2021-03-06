
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Product = require('./model_product');
var User = require('./model_users');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var session = require('express-session');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/martdb');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

app.use(session({secret: "Shh, its a secret!",resave: false,
saveUninitialized: true}));

app.get('/',function(req,res){
    // console.log(req.session.user);
    Product.find(function(err,prods){
        res.send(prods);
        res.end();
    })
})

app.post('/signup',function(req,res){
    var data = req.body;
    console.log(data);

    if(!data.email || !data.password || !data.cpassword){
        res.send('incomp');
    }
    else{
        User.find({email:data.email},"email",function(err,result){
            console.log(result);
            if(result != ""){
                res.send("exists");
            }
            else{
                var newUser = new User({name:data.name,email:data.email,type:"buyer"});
                newUser.password = newUser.generateHash(data.password);
                newUser.save();
                res.send("succ");
            }
        })
    }
})

app.post('/login',function(req,res){
    var data = req.body;
    console.log(data);
    if(!data.email || !data.password){
        res.send("incomp");
    }
    else{
        User.findOne({email:data.email},function(err,result){
            if(err){
                throw err;
            }
            if(result != undefined){

                if(!result.validPassword(data.password)){
                    res.send('wrong');
                }
                else{
                    console.log(result);
                    req.session.user = result;
                    res.send("succ");
                    // res.render('product_list');
                }
            }
            else{
                res.send('signup');
            }
        })
    }
})


app.listen(5000);
