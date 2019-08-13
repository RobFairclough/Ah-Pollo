import * as mysql from 'mysql';
import { dbConfig } from '../config';

const connection = mysql.createConnection(dbConfig);

const sql = 'SELECT * FROM Sites';

const asyncLog = (err: mysql.MysqlError, result: any) => {
    if (err) throw err;
    console.log({result});
}

connection.connect(async err => {
    if (err) throw err;
    const res = await connection.query(sql, asyncLog)
})