var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product_schema = new Schema({
    name:String,
    description:String,
    price:String,
    category:String,
    Reviews:String,
    seller_id:String});


var product = mongoose.model('product',product_schema);

module.exports = product;