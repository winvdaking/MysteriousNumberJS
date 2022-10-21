const path = require('node:path')

const express = require('express');
const app = express();
const port = 3000;

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});