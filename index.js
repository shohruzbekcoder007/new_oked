const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const user_router = require('./routers/user')
const oked_router = require('./routers/oked')

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser('q1y1npar0l'))
app.use(cors({
  origin: '*',
  credentials: true,
}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.static('./static'));
app.set("view engine", "pug");

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/okeds1')
  .then(() => {
    console.log('MongoDBga ulanish hosil qilindi...');
  })
  .catch((err) => {
    console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
  });

app.use('/user', user_router)
app.use('/oked', oked_router)

app.get("/", async (req,res) => {

  return res.render('login', {})

});

app.listen(port, ()=> {
  console.log(`Application is up and running under localhost:${port}`)
})