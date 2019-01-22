const pg = require('pg');

// create a config to configure both pooling behavior
// and client options
// note: all config is optional and the environment variables
// will be read if the config is not present
  const config = {
  user: 'tvscaycjtcjdfw', // env var: PGUSER
  database: 'df5ag76qen94kd', // env var: PGDATABASE
  password: 'a4c61572475ac4d4e0b1d0545a4b5a2321944100cb1488b8b0b21880a2966eab', // env var: PGPASSWORD
  host: 'ec2-23-21-171-25.compute-1.amazonaws.com', // Server hosting the postgres database
  port: 5432, // env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
  };
  
  const pool = new pg.Pool(config);
  pg.defaults.ssl = true;
  async function query (q) {
  const client = await pool.connect();
  let res;
  try {
    await client.query('BEGIN');
    try {
      res = await client.query(q);
      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    }
  } finally {
    client.release();
  }
  return res;
}

  module.exports = {
  query: query
};
