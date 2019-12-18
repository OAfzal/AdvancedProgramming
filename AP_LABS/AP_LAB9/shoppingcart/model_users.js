var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var user_schema = new Schema({name:String,email:String,password:String,type:String})

user_schema.methods.generateHash = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};

user_schema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

var user = mongoose.model('user',user_schema);
module.exports = user;


// function createDB(){
//     mongoClient.connect(url + "db_users",function(err,db){
//         console.log("DB created with name db_users");
//     })
// }