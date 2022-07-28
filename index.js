const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/about', (req, res) => {
  console.log(`/about`);
  res.json({ label: 'web-container' });
});

app.get('/help', (req, res) => {
  console.log(`/help`);
  res.json({ url: 'https://stackblitz.com/edit/express-simple-sxln6g' });
});
app.get('/info', (req, res) => {
  console.log(`/info`);
  res.json({ version: 0.1, env: process.env });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
