const mysql = require('mysql2');  							
							
const connection = mysql.createConnection({  							
  host: 'localhost',  							
  user: 'root',  							
  password: 'Nguyentri13072005',  							
  database: 'shop_db'  							
});  							
							
connection.connect((err) => {  							
  if (err) throw err;  							
  console.log('Connected to MySQL Database!');  							
});  							
							
module.exports = connection;  							