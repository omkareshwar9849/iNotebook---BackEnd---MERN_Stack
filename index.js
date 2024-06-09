const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')

connectToMongo();
const app = express()
const port = 5000
const hostname = '192.168.1.4'

// const corsOptions = {
//   origin: ['http://192.168.1.4:3000','http://localhost:3000'], // Replace with your frontend URL
//   credentials: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   optionsSuccessStatus: 204,
// };
app.use(cors());
app.use(express.json())

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin','http://192.168.1.4:3000');
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))
app.use('/api/email', require('./routes/email'))

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// app.listen(port,hostname, () => {
//   // console.log(`Example app listening at http://${hostname}:${port}`);
//   console.log(`Server running at http://0.0.0.0:${port}/`);
// })

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})