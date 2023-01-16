
import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import CustomerAdd from './components/CustomerAdd';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
const styles = theme => ({
  root: {
    width: "100%",
    minWidth: 1080
  },

  // 고객 추가하기 버튼 : 가운데 정렬 
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },

  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  grow: {
    flexGrow: 1,
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  }
});

// 상태 관리를 통해 상태 변환시 화면을 재구성 
// 고객 정보는 변할 수 있는 데이터, 필요할때마다 서버에서 데이터를 불러옴 

class App extends Component {

   //props는 변할 수 없는 데이터 
  // state는 컴포넌트 내에서 변할 수 있는 데이터를 가져올 때 
  // progress 바는 0%에서 100%까지 로딩 화면을 보이기 때문에 complted: 0
  // 생성자에서 earchKeyword: '' 초기화해주면 초기에 새로고침시 전체 고객 데이터가 출력됨 
  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0,
      searchKeyword: ''
    }
    this.stateRefresh = this.stateRefresh.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  // 자동 새로고침 함수, 검색 키워드도 초기화 
  stateRefresh() {
    this.setState({
      customers: '',
      completed: 0,
      searchKeyword: ''
    });
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  // 모든 컴포넌트가 마운트, 고객 목록 데이터를 부르는 함수
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // 비동기적으로 async 호출 , 고객 목록 데이터를 반환 
  // 비동기 호출로, api 서버에서 응답을 하지 않으면 로딩 화면만 출력 
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  // progress 바는 0%에서 100%까지 로딩 화면을 보이기 때문에 complted: 0
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  // 고객 데이터의 다음 정보를 저장하는 함수 
  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  render() {
    // filteredComponents(this.state.customers)는 고객을 검색할 때, 정보를 보여주는 형
    // 검색한 내용이 포함되어 있다면 그 데이터만 남겨두는 것 
    const filteredComponents = (data) => {
     data = data.filter((c) => {
      return c.name.indexOf(this.state.searchKeyword) > -1;
      });
      return data.map((c) => {
        return <Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.name} birth={c.birth} gender={c.gender} job={c.job} />
      });
    }
    const { classes } = this.props;
    const cellList = ["번호", "프로필 이미지", "이름", "생년월일", "성별", "직업", "설정"]
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              고객 관리 시스템
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="검색하기"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}

                // 검색하는 기능
                name="searchKeyword"
                value={this.state.searchKeyword}
                onChange={this.handleValueChange}
              />
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.menu}>
          <CustomerAdd stateRefresh={this.stateRefresh} />
        </div>
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                {cellList.map(c => {
                  return <TableCell className={classes.tableHead}>{c}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ?
                filteredComponents(this.state.customers) :
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(App);