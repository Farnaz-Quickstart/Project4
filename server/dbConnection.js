import mysql from 'mysql2'
import dotenv from 'dotenv';

dotenv.config();  // Load .env variables

// const dataBase = mysql.createConnection ( {
//   host: 'localhost',
//   user: 'root',
//   password: 'Ntw29tir*',
//   database: 'QAnswer'
// })


const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,      // 'roundhouse.proxy.rlwy.net'
  user: process.env.MYSQL_USER,      // 'root'
  password: process.env.MYSQL_PASSWORD, // 'IBPfvSDukookFeBZPSEaSfBaynoMTErd'
  database: process.env.MYSQL_DATABASE, // 'QAnswer'
  port: process.env.MYSQL_PORT || 14325 // Use the port provided in the string (or default to 14325)
});

dataBase.connect ((err)=> {
  if (err) {
    console.log ("Error on DB connect:", err)
    return;
  }
  console.log ("Connected to School DB")
})

export default dataBase;