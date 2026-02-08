import { DB } from "@sqlite/sqlite";
import { devNull } from "node:os";

const db = new DB("./db/test.db");

db.execute(
	`CREATE TABLE IF NOT EXISTS users ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    username TEXT, 
    hashedPassword TEXT 
    )`,
);

db.execute(`
  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT,
    userAgent STRING,
    token TEXT,
    userId INTEGER 
  )
`);

db.execute(`
    CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    title TEXT,
    body TEXT
    )`);
