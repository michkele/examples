const express = require('express');
const { body } = require('express-validator/check');

const testController = require('../controllers/test');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /test/gettests
router.get('/gettests', testController.getTests);
// router.get('/gettests', isAuth, testController.getTests); //with jwt

// POST /feed/post
router.post(
  '/posttests',
  testController.getTests
);

// router.post(
//   '/posttests',
// isAuth,
//   testController.getTests
// );

module.exports = router;
