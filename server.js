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

// 파일 처리를 위해 multer 라이브러리 사용 및 객체 생성 
const multer = require('multer');
// 사용자의 파일이 업로드 되는 공간 
const upload = multer({dest: './upload'})

// 클라이언트가 customers에 접속을 하면, DB에 접근해서 쿼리
// isDeleted = 0인 가져온 데이터를 rows변수로 처리
// 모든 고객 데이터가 포함된 rows 변수를 사용자에게 보여줌
app.get('/api/customers', (req, res) => {
    connection.query(
      "SELECT *FROM CUSTOMER_osswp WHERE isDeleted = 0",
      (err, rows, field) => {
        res.send(rows);
      }
    );

});

// 사용자가 접근하여 프로필 이미지를 확인하는 부분
// 이미지가 실제 서버에 접근   
app.use('/image', express.static('./upload'));

// post방식으로, 사용자가 고객 추가시 데이터를 전송 
// 첫번째 속성은 자동으로 아이디 값-> null  
// 이미지는 해당 데이터베이스의 'http 이미지 경로' + req.file.filename
app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER_osswp VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
  let image = 'http://localhost:5000/image/' + req.file.filename;
  let name = req.body.name; 
  let birth = req.body.birth; 
  let gender = req.body.gender; 
  let job = req.body.job; 

  let parms = [image, name, birth, gender, job]; // ?,?,... 각각 데이터가 바인딩되는 부분 
  connection.query(sql, parms,
    (err, rows, fields) => {
      res.send(rows);

    }
  );

});

// id 값 매칭되면 삭제하는 서버 기능 
// 삭제 데이터 전달 let params 
app.delete('/api/customers/:id', (req, res) => {
  let sql = 'UPDATE CUSTOMER_osswp SET isDeleted = 1 WHERE id = ?';
  let params = [req.params.id];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
    

  )
});


app.listen(port, () => console.log(`Listening on port ${port}`));
