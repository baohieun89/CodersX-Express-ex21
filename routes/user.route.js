const express = require('express');
var multer  = require('multer');

var db = require('../db');

var shortid = require('shortid');
var bodyParser = require('body-parser');
var controller = require('../controllers/users.controller')
var validate = require('../validate/users.validate')

var router = express.Router();
var upload = multer({ dest: './public/images/avatars' })

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true }))


router.get('/', controller.index);
router.get('/search', controller.search);


router.get('/create', controller.create);

router.post('/create',
  upload.single('avatar'),
  validate.postCreate,
  controller.postCreate
);

router.get('/:id', controller.view);
router.get('/edit/:id', controller.edit);
router.post('/edit/:id', controller.postEdit);
router.get('/:id/delete', controller.delete);

module.exports = router;
