require('dotenv').config()

const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

const connectDB = require('./config/db')

connectDB()

const methodOverride = require('method-override')

const logRoutes = require('./routes/logRoutes')

const { createEngine } = require('jsx-view-engine')

app.set('view engine', 'jsx')

app.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to the Captain's Log App</h1>
      <p><a href="/logs">View Captain's Logs</a></p>
    `);
  });
  
// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use('/logs', logRoutes)

// app.get('/create', (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
// })

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})