const Form = require('../models/users');
//IMPORT CONFIG FILE AND JWT LIBRARY
const jwt = require('jwt-simple');
const config = require('../config');
const nodemailer = require('nodemailer');


//Nodemailer gmail email and password
/*const EMAIL_ACCOUNT_USER = config.EmailServer.emailAccountForm;
const EMAIL_ACCOUNT_PASSWORD = config.EmailServer.emailPassword;
const YOUR_NAME = config.EmailServer.emailName;

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
    auth: {
      user: EMAIL_ACCOUNT_USER,
      pass: EMAIL_ACCOUNT_PASSWORD
    }
});*/


//Tokenize a piece of information
function tokenForForm(form){
  const timestamp = new Date().getTime();//creating timestamp for the token
  //subject is userid, initialized at time: timestamp
  return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
}
function sendEmail(text, req, res, next) {
  console.log(req.body);
  console.log(text);
      smtpTransport.sendMail({  //email options
        from: EMAIL_ACCOUNT_USER, // sender address.  Must be the same as authenticated user if using GMail.
        to: req.body.email, // receiver
        subject: "Engager.io email verification", // subject
        text: text // body
      }, function(error, response){  //callback
        if(error){
          console.log(error);
        }else{
          console.log("Message sent: " + response.message);
          res.send("email sent");
        }

        smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
      });
    }



exports.signup = function(req, res, next){
  //See if the user with the given email exists
  console.log(req.body);
  const name = req.body.name;
  const description = req.body.description;
  const tags = req.body.tags;
  var baseUrl = req.protocol + '://localhost:8080';
  var text = 'You have requested to create an account at engager.io. To verify this please click the link: ' + baseUrl ;
  const status = "open";

  Form.findOne({name: name}, function(err, existingForm) {
    //If the connection drops, return an error
    if(err){
      return next(err);
    }
    //if a user with email does NOT exist, create and save user record
    const form = new Form({
      name: name,
      description: description,
      tags: tags
    });
    form.save(function(err){
      if(err){return next(err);}
    });
    res.send(form); //just responding with a json to show that it receives
  });
  //Respond to request indicating the user was created
}
