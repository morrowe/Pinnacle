import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Pool } = pg;
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    // host: '192.168.',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
