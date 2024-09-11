import pkg from "pg";
const { Pool } = pkg;


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "toDoList",
    password: "D99kgQP4ZJ11Ha4BB^@V",
    port: 5432,
});

export const createToDoTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS toDos (
            id SERIAL PRIMARY KEY,
            content VARCHAR(200) NOT NULL,
            time TEXT
        );
    `;
await pool.query(query);
};

export const getToDos = async () => {
    const result = await pool.query(`SELECT * FROM toDos;`);
    return result.rows;
};

export const createToDo = async (toDo) => {
    const content = toDo;
    const time = new Date();

    const result = await pool.query(
        `INSERT INTO toDos (content, time) VALUES ($1, $2)`,
        [content, time]
    );

    return result.rows[0];
};

export const updateToDo = async (id, updatedToDo) => {
    const content = updatedToDo;
    const result = await pool.query(
        'UPDATE toDos SET content = $1 WHERE id = $2',
        [content, id]
    );
    return result.rows[0];
};

export const deleteToDo = async (id) => {
    const result = await pool.query(
        'DELETE FROM toDos WHERE id = $1',
        [id]
    );
    return result.rows[0];
};