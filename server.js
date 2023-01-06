const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true}));

// 클라이언트가 customers에 접속을 하면, 데이터를 반환 
// App.js에 명시해놓았던 고객 데이터를 반환 
app.get('/api/customers', (req, res) => {
    res.send([

        {
            'id' : 1,
            'image' : 'https://placimg.com./64/64/any',
            'name': '가나다',
            'birth' : '990101',
            'gender' : '여자',
            'job' : '서버 관리자'
          
          },
          
          {
            'id' : 2,
            'image' : 'https://placimg.com./64/64/any',
            'name': '김대한',
            'birth' : '010504',
            'gender' : '남자',
            'job' : '개발자'
          },
          
          {
            'id' : 3,
            'image' : 'https://placimg.com./64/64/any',
            'name': '박민국',
            'birth' : '980504',
            'gender' : '남자',
            'job' : '대학생'
          }


        ]);

});

app.listen(port, () => console.log(`Listening on port ${port}`));
