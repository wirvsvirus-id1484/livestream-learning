const express = require('express');
const wb = express();

wb.get('board', (req, res) => console.log("Hi"));