const getDynamicData = (req, res) => {
  const now = new Date();
  const hours = now.getHours();
  
   
  let greeting;
  if (hours < 12) {
    greeting = 'Good morning';
  } else if (hours < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  

  const timeOptions = {
    timeZone: 'UTC',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  
  res.json({
    success: true,
    message: 'Dynamic Data Endpoint',
    data: {
      greeting: `${greeting}! Welcome to our API.`,
      currentTime: {
        iso: now.toISOString(),
        local: now.toLocaleString(),
        utc: now.toUTCString(),
        formatted: now.toLocaleTimeString('en-US', timeOptions)
      },
      serverInfo: {
        timezone: 'UTC',
        timestamp: now.getTime(),
        dayOfWeek: now.toLocaleDateString('en-US', { weekday: 'long' })
      }
    },
    timestamp: now.toISOString()
  });
};

module.exports = {
  getDynamicData
};