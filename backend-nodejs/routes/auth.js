const express = require('express');
const { body } = require('express-validator/check');

const authController = require('../controllers/auth');

const router = express.Router();

router.post('/login', 
[
  body('email')
    .trim()
    .isLength({ min: 5 }),
  body('password')
    .trim()
    .isLength({ min: 5 })
], authController.login);

module.exports = router;
