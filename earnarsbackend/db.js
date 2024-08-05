require('dotenv').config();
const mysql = require('mysql2')

 const db = mysql.createPool({
    connectionLimit:10,
   //  host: process.env.DB_HOST,
   //  user: process.env.DB_USER,
   //  password: process.env.DB_PASSWORD,
   //  database: process.env.DB_NAME 
    host:"localhost",
    user:"buike",
    password:"BuikE@369",
    database:"we_go" 
})
// database: "betproject"
db.getConnection((err,connection)=>{
   if(err){
      console.error('Error connection',err)
   }else{
    //   const pat = "ALTER TABLE users MODIFY COLUMN account_number VARCHAR(255)"
    //   db.query(pat, (err, result) => {
    //      if (err) {
    //         console.log(err)
    //      }else{

    //         return console.log("table created")
    //      }
    //   })
    //   connection.release();
    console.log("successful connection")
    con
   }
})

module.exports = {db}




