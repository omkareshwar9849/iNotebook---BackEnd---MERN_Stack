const connecToMongo = require('./db.js');
const express = require('express')
connecToMongo().catch((err) => console.log(err));

const app = express()
const port = 3000

//Avaliable Routes
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello Omkar!')
})

app.get('/api/login', (req, res) => {
  res.send('Hello Omkar login!')
})

app.get('/signup', (req, res) => {
  res.send('Hello Omkar signup!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})