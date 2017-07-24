const Form = require('../models/users');
//IMPORT CONFIG FILE AND JWT LIBRARY
const jwt = require('jwt-simple');
const config = require('../config');
const nodemailer = require('nodemailer');


//Nodemailer gmail email and password
const EMAIL_ACCOUNT_USER = config.EmailServer.emailAccountForm;
const EMAIL_ACCOUNT_PASSWORD = config.EmailServer.emailPassword;
const YOUR_NAME = config.EmailServer.emailName;

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
    auth: {
      user: 'octo.engager.mailer@gmail.com',
      pass: 'S3D5jRBnkcTp5ghnIk5fCLS6KvDo02'
    }
});



function sendEmail(user, userId, req) {
  console.log(req.body.approversEmail);
  var baseUrl = req.protocol + '://localhost:8080/admin/' + userId;
  var text = req.body.name + ' is trying to submit a form. To verify this his form, please click the link: ' + baseUrl ;
      smtpTransport.sendMail({  //email options
        from: "hijazikaram@gmail.com", // sender address.  Must be the same as authenticated user if using GMail.
        to: req.body.approversEmail, // receiver
        subject: "Form submission", // subject
        text: text // body
      }, function(error, response){  //callback
        if(error){
          console.log(error);
        }else{
          console.log("Message sent: " + response.message);
        }

        smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
      });
    }

    function sendEmailToApprovedUser(user, userId, req) {
      console.log(req.body.approversEmail);
      var baseUrl = req.protocol + '://localhost:8080/admin/' + userId;
      var text = req.body.name + ' is trying to submit a form. To verify this his form, please click the link: ' + baseUrl ;
          smtpTransport.sendMail({  //email options
            from: "hijazikaram@gmail.com", // sender address.  Must be the same as authenticated user if using GMail.
            to: req.body.approversEmail, // receiver
            subject: "Form submission", // subject
            text: text // body
          }, function(error, response){  //callback
            if(error){
              console.log(error);
            }else{
              console.log("Message sent: " + response.message);
            }

            smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
          });
        }
        function sendEmailToDeniedUser(user, userId, req) {
          console.log(req.body.approversEmail);
          var baseUrl = req.protocol + '://localhost:8080/admin/' + userId;
          var text = req.body.name + ' is trying to submit a form. To verify this his form, please click the link: ' + baseUrl ;
              smtpTransport.sendMail({  //email options
                from: "hijazikaram@gmail.com", // sender address.  Must be the same as authenticated user if using GMail.
                to: req.body.approversEmail, // receiver
                subject: "Form submission", // subject
                text: text // body
              }, function(error, response){  //callback
                if(error){
                  console.log(error);
                }else{
                  console.log("Message sent: " + response.message);
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
  const methods = req.body.methods;
  const models = req.body.models;
  const formId = req.body.id;
  const email = req.body.email;
  const approversName = req.body.approversName;
  const approversEmail = req.body.approversEmail;

  const status = "open";

  Form.findOne({name: name}, function(err, existingForm) {

    //If the connection drops, return an error
    if(err){
      return next(err);
    }
    //if a user with email does NOT exist, create and save user record
    const form = new Form({
      name: name,
      email: email,
      description: description,
      tags: tags,
      methods: methods,
      models: models,
      approversName: approversName,
      approversEmail: approversEmail
    });
    form.save(function(err, user){
      if(err){return next(err);}
      sendEmail(user, user.id, req);
    });
    res.send(form);
     //just responding with a json to show that it receives
  });

  //Respond to request indicating the user was created
}
exports.getUserInfo = function (req, res, next) {
  const user_id = req.params.id;
  console.log(req.body);
  console.log(req.params.id);
  Form.findById({_id: user_id})
      .then(user => res.send(user))
      .catch(next);
}
