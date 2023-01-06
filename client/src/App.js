import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

// styles 변수, 너비100, 마진 3
// x축으로 오버플로우가 발생할 수 있도록 처리, 가로 스크롤바가 생김
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },

// 화면 크기가 줄어들어도 전체 1080픽셀은 무조건 테이블 크기가 자리잡음
  table: {
    minWidth: 1000
  }
})



// 보내는 데이터 명시
const customers = [
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
]

// Paper는 컴포넌트 외부를 감싸는 컴포넌트
class App extends Component {
  render(){
    // 클래스 변수 선언 
    const {classes} = this.props;
  return (
    // material ui를 이용한 테이블 구조
    // map형태로 반복, 각 원소를 구분하는 key값 (id값이 다르기 때문에 c.id로 설정)
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            { customers.map(c => { 
            return ( 
            <Customer 
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birth={c.birth}
            gender={c.gender}
            job={c.job}
            />
            );
            })
          }
        </TableBody>

      </Table>
    </Paper>
            
            );
        }
      }

export default withStyles(styles)(App);
