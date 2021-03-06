const express = require('express');
const router = express.Router();
const { postRegister } = require('../controllers/index');
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET /register. */
router.get('/register', (req, res, next) => {
  res.send("get /register");
});
/* POST /register. */
//this is for creating the user.

router.post('/register', postRegister);

/* get /login. */
router.get('/login', (req, res, next) => {
  res.send("get /login");
});

/* POST /login. */
router.post('/login', (req, res, next) => {
  res.send("post /login");
});

/* GET /profile */
router.get('/profile', (req, res, next) => {
  res.send("GET /profile");
});

//so that you can update the user info which you got from the login
//so the profile will get this data and then you will be able to update this information
/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send("PUT /profile/:user_id");
});

/* GET /forgot */
router.get('/forgot', (req, res, next) => {
  res.send("GET /forgot");
});

/* PUT /forgot */
router.put('/forgot', (req, res, next) => {
  res.send("PUT /forgot");
});

/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send("GET /reset/:token");
});
/* PUT /reset/:token */
router.put('/reset/:token', (req, res, next) => {
  res.send("PUt /reset/:token");
});
module.exports = router;
