require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

// Routers
app.use('/', require('./routes/index'))

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
