import { createPool } from "mysql2";

const db = createPool({
    host: process.env.DBHost,
    user: process.env.DBUser,
    password: process.env.DBPassword,
    database: process.env.DBName,
    multipleStatements: true,
    connectionLimit: 30 
}
)

db.on('connection', (pool) => {
    if(!pool) throw new Error('Database connection failed');
})

export {db}