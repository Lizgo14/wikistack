const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"))


app.get('/', (req,res,next)=>{
  console.log('hello world')
})

app.listen(1337, () => {
  console.log(`App listening in port`);
});