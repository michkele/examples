const { validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const password = req.body.password;

  if(email == "testuser@test.com"
    && password == "123456") {
      const token = jwt.sign(
        {
          email
        },
        'rapydsupersecret',
        { expiresIn: '1h' }
      );
      res.status(200).json({ token: token, userEmail: email.toString() });
    } else {
      const error = new Error('A user with this email could not be found.');
        error.statusCode = 401;
        throw error;
    }
};
