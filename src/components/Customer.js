import React from 'react'; // 특정 라이브러리 불러오기 
import TableRow from '@material-ui/core/TableRow';  //테이블 행
import TableCell from '@material-ui/core/TableCell'; //테이블 원소


// 일종의 라이브러리이자 클래스인 React.Component
class Customer extends React.Component{
    
    // 리액트.컴포넌트가 실제로 그려지는 부분 render, return 형식 필요함
    render() {  
        return(
            <TableRow>
            <TableCell>{this.props.id}</TableCell>
            <TableCell> <img src = {this.props.image} alt="profile"/></TableCell>
            <TableCell>{this.props.name}</TableCell>
            <TableCell>{this.props.birth}</TableCell>
            <TableCell>{this.props.gender}</TableCell>
            <TableCell>{this.props.job}</TableCell>
        </TableRow>
        )
    }
}

// 사용자의 image, id를 랜더링하는 부분 

// 고객의 남은 정보를 출력하는 부분 



export default Customer; // 다른 컴포넌트에서 사용할 수 있게 내보냄 