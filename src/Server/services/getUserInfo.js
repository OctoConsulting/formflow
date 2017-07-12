const Form = require('../models/users');

module.exports = function(req, res, next){
  const user_id = req.params.id;

  Form.findById({_id: user_id})
      .then(user => res.send(user))
      .catch(next);
}
