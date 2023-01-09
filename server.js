const fs = require('fs');
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true}));

// database.json에서 파일을 읽어옴 
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data); 
const mysql = require('mysql');

const connection = mysql.createConnection({

  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database 
});
connection.connect();

// 클라이언트가 customers에 접속을 하면, DB에 접근해서 쿼리
// 가져온 데이터를 rows변수로 처리
// 모든 고객 데이터가 포함된 rows 변수를 사용자에게 보여줌
app.get('/api/customers', (req, res) => {
    connection.query(
      "SELECT *FROM CUSTOMER_osswp",
      (err, rows, field) => {
        res.send(rows);
      }
    );

});

app.listen(port, () => console.log(`Listening on port ${port}`));
