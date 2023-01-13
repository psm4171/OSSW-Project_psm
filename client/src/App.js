import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import  CircularProgress from '@material-ui/core/CircularProgress';
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
  },

  progress: {
    margin: theme.spacing.unit *2
  }

});

// props or state 변경된 경우 함수 호출, shouldComponentUpdate()
// 상태 관리를 통해 상태 변환시 화면을 재구성 
// 고객 정보는 변할 수 있는 데이터, 필요할때마다 서버에서 데이터를 불러옴 

// Paper는 컴포넌트 외부를 감싸는 컴포넌트
class App extends Component {

  //props는 변할 수 없는 데이터 
  // state는 컴포넌트 내에서 변할 수 있는 데이터를 가져올 때 
  // progress 바는 0%에서 100%까지 로딩 화면을 보이기 때문에 complted: 0
  constructor(props){
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));

  }

  // 모든 컴포넌트가 마운트, 고객 목록 데이터를 부르는 함수  
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));

  }

  // 비동기적으로 async 호출 , 고객 목록 데이터를 반환 
  // 비동기 호출로, api 서버에서 응답을 하지 않으면 로딩 화면만 출력 
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json(); 
    return body;
  }

  // 0부터 100까지의 값을 왔다갔다 로딩 표시
  progress = () => {
    const {completed} = this.state; 
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  render(){
    // material ui를 이용한 테이블 구조
    // map형태로 반복, 각 원소를 구분하는 key값 (id값이 다르기 때문에 c.id로 설정)
    const {classes} = this.props;
  return (
    <div>
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
            
              { this.state.customers ? this.state.customers.map(c => { 
              return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birth={c.birth} gender={c.gender} job={c.job}/>);
              }) : 
              
              <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
              </TableCell>
              </TableRow>
              }

          </TableBody>
        </Table>
      </Paper>
    <CustomerAdd stateRefresh={this.stateRefresh}/>
  </div>
    );
  }
}

export default withStyles(styles)(App);
