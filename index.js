const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))
app.use('/api/email', require('./routes/email'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})