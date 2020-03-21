const express  = require('express')
const custom_app = express();

custom_app.use(express.static('public'))

custom_app.listen(8043, () => console.log("Custom Running."))