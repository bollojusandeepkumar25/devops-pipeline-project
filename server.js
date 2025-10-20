// Simple Express server for our DevOps pipeline demo
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the Automated Pipeline!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});// Trigger workflow run: 2025-10-20T23:27:45.9478633+05:30
