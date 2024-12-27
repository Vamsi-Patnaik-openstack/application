const mysql = require('mysql2');

try {
  // Create a connection pool to the RDS instance
  const pool = mysql.createPool({
   host: process.env.DB_HOST || 'database-1-instance-1.cl4iiay8ctw9.ap-south-1.rds.amazonaws.com', // Default to localhost if not set
   user: process.env.DB_USER || 'admin',
   password: process.env.DB_PASSWORD || 'India#123',
   database: process.env.DB_NAME || 'database-1',
   port: parseInt(process.env.DB_PORT, 10) || 3306  // Ensure the port is an integer
});

// Query the database
  pool.query('SELECT * FROM my_table', (err, results) => {
    if (err) {
      console.error('Error querying database:', err.stack);
      return;
    }
    console.log('Results:', results);
  });

} catch (err) {
  console.error('Error with the MySQL pool configuration:', err);
}
