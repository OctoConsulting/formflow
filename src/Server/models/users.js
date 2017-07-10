const bcrypt = require('bcrypt-nodejs');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//DEFINE THE USER MODEL
const formSchema = new Schema({
  //lowercase makes sure it's turned lowercase all the time
  name: String,
  description: String, //making sure the email field is always unique with MongoDB
  tags: String


});



//CREATE THE MODEL CLASS
const FormModelClass = mongoose.model('form', formSchema);


//EXPORT THE MODEL
module.exports = FormModelClass;
