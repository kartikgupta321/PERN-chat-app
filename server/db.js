const Pool = require("pg").Pool;

const pool = new Pool({
    user :"postgres",
    password : "2505",
    host : "localhost",
    port : 5432,
    database : "epatra"
});

module.exports = pool;