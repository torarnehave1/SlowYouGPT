// index.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const { port } = require('./config');
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
