const getAbout = (req, res) => {
  res.json({
    success: true,
    message: 'About Us',
    data: {
      project: 'Express MVC Server',
      purpose: 'Learning backend fundamentals with Express.js',
      architecture: 'MVC Pattern (Model-View-Controller)',
      features: [
        'JSON request handling',
        'Route-based architecture',
        'Controller logic separation',
        'Dynamic data endpoints',
        'Request validation (bonus)'
      ],
      author: 'Express.js Learning Project'
    },
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getAbout
};