import * as mysql from 'mysql';
import * as Knex from 'knex';
import { dbConfig, knexConfig } from '../config';
const knex: Knex = require('knex')(knexConfig);

const users = knex('Users').select('*').then((users) => console.log(users)).catch(console.log);

// const connection = mysql.createConnection(dbConfig);


// const sql = 'SELECT * FROM Sites';

// const asyncLog = (err: mysql.MysqlError, result: any) => {
//     if (err) throw err;
//     console.log({result});
// }

// connection.connect(async err => {
//     if (err) throw err;
//     const res = await connection.query(sql, asyncLog)
// })