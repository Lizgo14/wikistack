const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')
const app = express();
// const style = require("./stylesheets/style")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"))


app.get('/', (req,res,next)=>{
  res.send("")
})


app.listen(3000, () => {
  console.log(`App listening in port`);
});