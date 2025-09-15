const express = require('express');
const path = require('path');
const app = express();
const PORT = 8888;

// Subpath to serve the app on
app.use(express.static(path.join(__dirname, 'build')));

// For all other routes under subpath, serve index.html (for SPA routing)
const SUBPATH = `/ws-ea5b4463-dd5d-4abc-88c5-875a4a0f3065-68c2d368257c4071a3a51116/8888/`;

app.get(`/*`, (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
