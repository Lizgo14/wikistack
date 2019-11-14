const bodyParser = require('body-parser') 
const { Page } = require("../models")
const addPage = require("../views/addPage")
const express = require("express")
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/", (req, res, next) => {
    res.send('hi')
})

router.get("/add", (req, res, next) => {
    res.send(addPage());
})


router.post("/", async (req, res, next) => {
    // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    //slug: generateSlug(req.body.title)
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

module.exports = router;