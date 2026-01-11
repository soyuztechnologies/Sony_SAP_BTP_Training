const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'Hello from SAP BTP!';
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My First SAP BTP App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .container {
            text-align: center;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }
          h1 {
            color: #333;
            margin-bottom: 20px;
          }
          p {
            color: #666;
            font-size: 18px;
          }
          .info {
            margin-top: 20px;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 5px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 ${message}</h1>
          <p>Your application is running on SAP Business Technology Platform</p>
          <div class="info">
            <strong>Instance:</strong> ${process.env.CF_INSTANCE_INDEX || '0'}<br>
            <strong>Node.js Version:</strong> ${process.version}
          </div>
        </div>
      </body>
    </html>
  `);
});

// API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    message: 'Welcome to SAP BTP!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    instance: process.env.CF_INSTANCE_INDEX || '0'
  });
});

// Start server
app.listen(port, () => {
  console.log(`✅ App listening on port ${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
