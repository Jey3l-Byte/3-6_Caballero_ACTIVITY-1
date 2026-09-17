const mysql = require('mysql');
const conn = mysql.createConnection({
    host:"localhost", 
    user:"root",
    password:"",
    database:"Cabs_db"});
module.exports = conn;