const signup = require ('./controllers/formData');

module.exports = function(app){

  //This made sure that any requests is routed through the authorization module
  app.post('/signup', function(req, res, next) {

    signup.signup(req, res);

  });
}
