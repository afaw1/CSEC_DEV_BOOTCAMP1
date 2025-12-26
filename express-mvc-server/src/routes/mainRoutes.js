const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const contactController = require('../controllers/contactController');
const dynamicController = require('../controllers/dynamicController');
const jsonController = require('../controllers/jsonController');


router.use((req, res, next) => {
  req.startTime = Date.now();
  next();
});


router.get('/', homeController.getHome);


router.get('/about', aboutController.getAbout);


router.get('/contact', contactController.getContact);


router.get('/time', dynamicController.getDynamicData);


router.post('/echo', jsonController.echoJson);


router.get('/health', (req, res) => {
  res.json({
    success: true,
    status: 'Server is healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

module.exports = router;