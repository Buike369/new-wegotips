const mysql = require('mysql')

 const db = mysql.createPool({
    connectionLimit:90,
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}` ,
    password: `${process.env.DB_PASSWORD}` ,
     database: `${process.env.DB_NAME}`
    // database: "betproject"
  
  
   
})


// database: "betproject"
db.getConnection((err,connection)=>{
   if(err){
      console.log("connetion failed")
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
   }
})

module.exports = {db}




