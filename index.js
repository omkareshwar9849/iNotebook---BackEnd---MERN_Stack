const connecToMongo = require('./db.js');
const express = require('express')
connecToMongo().catch((err) => console.log(err));

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Omkar sir!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})