require('dotenv').config();


const mysql = require('mysql2/promise');

// Create a promise-based connection pool
const db = mysql.createPool({
   connectionLimit: 10,
   host: 'localhost',
   port: 3306,
   user: "root",
   password: "Wegotips@369",
   database: "wegos_data",

   // host: 'localhost',
   // host: process.env.DB_HOST,
   // port: 3306,
   // user: 'root',
   // password: 'Wegotips@469',
   // database: 'wegos_data',
});

// Check the connection
(async () => {
   try {
      const connection = await db.getConnection();
      console.log('Connected to the database.');
      connection.release(); // Release the connection back to the pool
   } catch (err) {

      console.error('Database connection failed:', err);
      process.exit(1);
   }
})();

module.exports = { db };


// const mysql = require('mysql2');

// // Create a promise-based connection pool
// const db = mysql.createPool({
//    connectionLimit: 10,
//    host: process.env.DB_HOST,
//    user: process.env.DB_USER,
//    password: process.env.DB_PASSWORD,
//    database: process.env.DB_NAME,
// });

// // Check the connection
// db.getConnection((err) => {
//    if (err) {
//       console.error('Database connection failed:', err);
//       process.exit(1);
//    }
//    console.log('Connected to the database.');
// });

// module.exports = { db };
