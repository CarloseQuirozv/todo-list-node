const express = require('express')
const todoController = require('./controllers/todoController')

let app = express()


// set up template engine
app.set('view engine', 'ejs')

// static files
app.use(express.static('./public'))

// fire controllers
todoController(app)

// listen a port
app.listen(3000)
console.log('Listening port 3000');
