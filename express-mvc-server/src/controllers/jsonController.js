const validateJsonInput = (data) => {
  const errors = [];
  
  if (!data || typeof data !== 'object') {
    errors.push('Request body must be a valid JSON object');
    return { isValid: false, errors };
  }
  

  if (Object.keys(data).length === 0) {
    errors.push('Request body cannot be empty');
  }
  
  const jsonString = JSON.stringify(data).toLowerCase();
  const forbiddenPatterns = ['<script>', 'javascript:', 'onload=', 'onerror='];
  
  forbiddenPatterns.forEach(pattern => {
    if (jsonString.includes(pattern)) {
      errors.push(`Content contains forbidden pattern: ${pattern}`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

const echoJson = (req, res) => {
  
  const validation = validateJsonInput(req.body);
  
  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      message: 'Invalid JSON input',
      errors: validation.errors,
      timestamp: new Date().toISOString()
    });
  }
  

  const receivedData = req.body;
  
  res.json({
    success: true,
    message: 'JSON data received successfully',
    data: {
      received: receivedData,
      processed: {
        keys: Object.keys(receivedData),
        values: Object.values(receivedData),
        count: Object.keys(receivedData).length,
        type: 'JSON Object'
      },
      metadata: {
        contentType: req.headers['content-type'],
        contentLength: req.headers['content-length'],
        processingTime: `${Date.now() - req.startTime}ms`
      }
    },
    echo: receivedData, 
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  echoJson,
  validateJsonInput
};