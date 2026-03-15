import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mahi",
  database: "finvision",
  waitForConnections: true,
  connectionLimit: 10
});

export default pool;