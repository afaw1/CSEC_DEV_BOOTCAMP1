const getContact = (req, res) => {
  res.json({
    success: true,
    message: 'Contact Information',
    data: {
      email: 'contact@example.com',
      github: 'https://github.com/yourusername',
      support: 'Open for contributions and feedback',
      note: 'This is a learning project. Feel free to explore the code!'
    },
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getContact
};