require('dotenv').config();
const mysql = require('mysql')

 const db = mysql.createPool({
    connectionLimit:90,
    host: 'localhost',
    user: 'king' ,
    password: 'King@369' ,
     database: 'wego_bet'
   
  
  
   
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




