//
const express = require('express');
const app = express();
const mysql = require('mysql');

// mysql connection attributes
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'web_customer_tracker',
  user: 'root',
  password: 'password',
});

// test database connection
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }

  console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM customer', function(error, results, fields) {
  if (error) {
    throw error;
  }

  results.forEach((result) => {
    console.log(result);
  });
});

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});

connection.end();
