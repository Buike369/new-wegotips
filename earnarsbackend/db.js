const path = require('path')
require('dotenv').config();
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });



const mysql = require('mysql2/promise');

// Create a promise-based connection pool
const db = mysql.createPool({
   connectionLimit: 10,
   host: process.env.DB_HOST,
   port: process.env.DB_PORT, 
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,

   // host: 'localhost',
   // user: 'root',
   // password: 'Kingsley369',
   // database: 'wego_data',
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
