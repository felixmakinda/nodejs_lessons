const mysql = require ('mysql');

//Create Connection to MySQL
const con = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: ''
  }
);
//Check Connection and Do Something
con.connect(function(err){
  if(err) throw err;
  console.log('Connection Successful!');
  con.query("CREATE DATABASE chelsea", function(err,result){
    if(err) throw err;
    console.log('Database Created.');
  });
});
