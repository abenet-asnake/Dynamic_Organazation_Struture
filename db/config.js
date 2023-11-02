const Pool = require('pg').Pool;

const client = new Pool({
    user: "postgres",
    password: "love",
    host: "localhost",
    port: 5432,
    database: "postgres",
    
}
)
console.log(client.user, client.host, client.port)
module.exports = client