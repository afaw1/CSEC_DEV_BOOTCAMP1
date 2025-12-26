const getHome = (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Express MVC Server!',
    data: {
      service: 'Backend API Service',
      version: '1.0.0',
      description: 'A simple Express.js server',
      endpoints: {
        home: '/',
        about: '/about',
        contact: '/contact',
        time: '/time (dynamic data)',
        echo: '/echo (POST - accepts JSON)'
      }
    },
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getHome
};