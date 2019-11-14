const bodyParser = require('body-parser') 

const express = require("express")
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }))


module.exports = router;