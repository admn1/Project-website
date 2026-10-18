const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to serve root images if requested directly
app.use(express.static(__dirname));

// Route for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 handler redirect to home
app.use((req, res) => {
  res.redirect('/');
});

// Start server
const server = app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`🚗 Smart Car Touchscreen Landing Page (Arabic RTL)`);
  console.log(`🌐 Server running at: http://localhost:${PORT}`);
  console.log(`📱 WhatsApp Order Link: https://wa.me/966551798746`);
  console.log('====================================================');
});

module.exports = server;
