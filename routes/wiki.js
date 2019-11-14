const bodyParser = require('body-parser') 
const addPage = require("../views/addPage")
const express = require("express")
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }))

router.get("/", (req, res, next) => {

})

router.post("/", (req, res, next) => {

})

router.get("/add", (req, res, next) => {
    res.send(addPage());
})

module.exports = router;