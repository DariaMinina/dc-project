const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 8080;

// Подключение к Postgres
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Тестовый запрос к БД
async function getDbTime() {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT NOW() as current_time');
        return res.rows[0];
    } finally {
        client.release();
    }
}

// Маршрут для фронтенда
app.get('/api/data', async (req, res) => {
    try {
        const dbData = await getDbTime();
        res.json({
        message: "Hello from backend!",
        database: dbData
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});