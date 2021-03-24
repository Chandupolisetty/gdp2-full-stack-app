const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
const locationController = require('../controllers/locationcontroller');
// const display = require('../views/display/display.js');
// const edit = require('../views/edit/edit.js')
// const create = require('../views/create/create.js')
const services = require('../services')


router.get('/', (req, res,next) => {
  res.render('../views/index', { title: 'index' })
})



router.get('/display', services.displays);
router.get('/editView', services.updateLocation);
router.get('/create', services.addlocation);

// router.get('/display', services.displays);
// router.get('/editview', services.updateLocation);
// router.get('/create', services.addlocation);


router.get('/location/', locationController.findAll);

router.post('/location/', locationController.create);

router.put('/location/edit', locationController.update)

router.delete('/location/delete', locationController.delete)






module.exports = router;