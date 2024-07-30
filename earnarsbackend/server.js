require('dotenv').config()
const express = require('express')
const multer = require('multer');
const authRoutes = require('./routes/auth.js')
const postRoutes = require('./routes/posts.js')
const userRoutes = require('./routes/users.js')
const uploadRoutes = require('./routes/uploadFile.js')
// const paymentRoutes = require('./routes/flutterwaves.js')
const { runJob } = require('./controllers/user.js')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const {db} = require('./db.js')
const bcrypt = require('bcrypt')
const session = require('express-session')
const passport = require("passport")
const bodyParser = require('body-parser')

// const GoogleStrategy = require("passport-google-oauth20").Strategy


// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });


function generateReferralCode(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars.charAt(randomIndex);
  }
  return result;
}

const referralCode = generateReferralCode(8);
const port = process.env.PORT || 5000
app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use((req, res, next) => {
  req.upload = upload;
  req.db = db;
  next();
});


var allowedOrigins = [
  "http://localhost:3000",
  "https://www.wegotips.com",
  "https://wegotips.com"
  
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin." +
          origin;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

// app.use(cors({
//     origin:"http://localhost:3000",

// }))

// app.use(cors())

app.use(cookieParser())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
})

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/post",postRoutes)
app.use("/api/files", uploadRoutes)


// app.post('/auth/google',(req,res)=>{
//   const idToken = req.body.tokenId;
//   console.log(idToken)
// }
// )


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
 
    runJob
})