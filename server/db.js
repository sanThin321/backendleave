import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "pass",
  port: 5432,
  database: "Leave",
});

export default pool;
