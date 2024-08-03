require('dotenv').config();
const mysql = require('mysql2')

 const db = mysql.createPool({
    connectionLimit:10,
    host:'127.0.0.1',
    user:'root' ,
    password:'KingS@369' ,
     database:'wego_bet',
    port:3306
   
  
  
   
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




