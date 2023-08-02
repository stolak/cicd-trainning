const express = require('express')
const app = express();
const path = require('path')

app.get('/names', (req, res) => {
  res.send('Akinbobola Olawolettdt');
})

app.get('/tutorial', (req, res) => {
  res.send('Samson and github');
})
app.listen(6000, () => {
  console.log("Server is running on port 6000");
})