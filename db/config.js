const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "love",
    database: "postgres",
    
}
)
console.log(client.user, client.host, client.port)
module.exports = client