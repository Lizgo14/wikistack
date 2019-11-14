const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser')
const { db } = require('./models');
const app = express();
const models = require('./models');
//const style = require("./stylesheets/style")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"))
db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.get('/', (req,res,next)=>{
  res.send("")
})

const init =async () => {
  await models.db.sync({force: true})

app.listen(3000, () => {
  console.log(`App listening in port`);
})
}
init()