const bodyParser = require('body-parser') 
const addPage = require("../views/addPage")
const express = require("express")
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json(req.body))

router.get("/", (req, res, next) => {
    res.send('hi')
})

router.post("/", (req, res, next) => {

})

router.get("/add", (req, res, next) => {
    res.send(addPage());
})

router.post("/add", (req, res, next) => {
    
})

module.exports = router;