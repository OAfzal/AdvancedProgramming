
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var User = require('./model_users');
var Product = require('./model_product');
var session = require('express-session');
const multer = require("multer");
var cookieParser = require('cookie-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/martdb');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const upload = multer({
    dest: "/images/"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});


app.use(session({secret: "Shh, its a secret!",resave: false,
saveUninitialized: true}));


app.set('view engine','pug');
app.set('views','./views'); 


app.get('/',function(req,res){
    // User.find(function(err,result){
    //     console.log(result);
    //     Product.find(function(err,prods){
    //         res.send(result + prods);
    //     })
    // })
    res.redirect('/login');

    // res.render('login');
});


app.get('/login',function(req,res){
    if(req.session.user){
        Product.find(function(err,prods){
            console.log({usertype:req.session.user.type,product:prods});
            if(req.session.user.type == "admin"){
                User.find(function(err,users){
                    console.log(users);
                    res.render('admin_view',{userList:users});
                })
            }
            else if(req.session.user.type == "seller"){
                console.log("here");
                Product.find({seller_id:req.session.user._id},function(err,prod_seller){
                    res.render('product_list_seller',{usertype:req.session.user.type,productList:prod_seller});
                })
            }
            else{
                res.render('product_list',{usertype:req.session.user.type,productList:prods});
            }

        })
    }
    else{
        res.render('login');
    }
})

app.post('/login',function(req,res){
    var data = req.body;

    if(!data.email || !data.password){
        res.render('login', {
            message: "Sorry, please fill all fields", type: "error"});
    }
    else{
        User.findOne({email:data.email},function(err,result){
            if(result != undefined){

                if(!result.validPassword(data.password)){
                    res.render('login', {
                        message: "Wrong Password", type: "error"});
                }
                else{
                    req.session.user = result;
                    res.redirect('/login');
                    // res.render('product_list');
                }
            }
            else{
                res.render('login',{message:'User does not exists. Please Register First',type:"error"});
            }
        })
    }
})

app.get('/register',function(req,res){
    res.render('register');
})

app.post('/register', function(req, res) {

    var data = req.body;
    if(!data.name || !data.email || !data.password || !data.c_password){
        res.render('show_message', {
            message: "Sorry, please fill all fields", type: "error"});
    }
    else{
        if(data.password != data.c_password){
            res.render('show_message', {
                message: "Passwords don't match", type: "error"});
        }
        else{
            User.find({email:data.email},"email",function(err,result){
                console.log(result);
                if(result != ""){
                    res.render('show_message',{message:'User already exists',type:"error"});
                }
                else{
                    var newUser = new User({name:data.name,email:data.email,type:"buyer"});
                    newUser.password = newUser.generateHash(data.password);
                    newUser.save();
                    res.render('login',{message:"User Created",type:"succ"});
                }
            })
        }
    }

    // var new_user = new User({
    //   username: req.username
    // });
    // res.send(req.body);
    // new_user.password = new_user.generateHash(userInfo.password);
    // new_user.save();
});

app.get("/addItem",function(req,res){
    if(req.session.user){
        console.log(typeof req.session.user._id);
        res.render('add_item');
    }
    else{
        res.redirect('login');
    }
})

app.post("/deleteItem",function(req,res){
    var data = req.body;
    console.log(data);
    Product.deleteOne({_id:data._id},function(err){
        if(err) throw err;
        console.log("done");
        res.send("Done");
    })
})



app.post("/deleteUser",function(req,res){
    var data = req.body;
    console.log(data);
    User.deleteOne({_id:data._id},function(err){
        if(err) throw err;
        // res.redirect('login');
        res.send("Done");
    })
})

app.post("/updateUser",function(req,res){
    var data = req.body;
    console.log(data);
    User.update({_id:data._id},{type:data.changes.type},function(err){
        if(err) throw err;
        // res.redirect('login');
        res.send("Done");
    })
})

app.get("/signout",function(req,res){
    console.log("Signed Out"+req.session.user);
    req.session.destroy();
    res.send("/login");
})

app.post("/addItem",function(req,res){
    var data = req.body;
    if(!data.name || !data.description || !data.price || !data.category || !data.reviews){
        res.render('add_item', {
            message: "Sorry, please fill all fields", type: "error"});
    }
    else{
        var newProd = new Product({name:data.name,description:data.description,price:data.price,category:data.category,reviews:data.reviews,
                                    seller_id:req.session.user._id});
        newProd.save();
        res.render("add_item",{
            message: "Product Added", type:"succ"
        });
    }

})


app.listen(5000);
