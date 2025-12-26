const express = require('express');
const mainRoutes = require('./routes/mainRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_ROUTE = '/api/v1'; 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(BASE_ROUTE, mainRoutes);


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    requestedUrl: req.originalUrl,
    availableRoutes: [
      `${BASE_ROUTE}/`,
      `${BASE_ROUTE}/about`,
      `${BASE_ROUTE}/contact`,
      `${BASE_ROUTE}/time`,
      `${BASE_ROUTE}/echo`
    ]
  });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}${BASE_ROUTE}`);
  console.log(`Available endpoints:`);
  console.log(`  GET  ${BASE_ROUTE}/`);
  console.log(`  GET  ${BASE_ROUTE}/about`);
  console.log(`  GET  ${BASE_ROUTE}/contact`);
  console.log(`  GET  ${BASE_ROUTE}/time`);
  console.log(`  POST ${BASE_ROUTE}/echo`);
});