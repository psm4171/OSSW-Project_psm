import React from 'react'; // 특정 라이브러리 불러오기 


// 일종의 라이브러리이자 클래스인 React.Component
class Customer extends React.Component{
    
    // 리액트.컴포넌트가 실제로 그려지는 부분 render, return 형식 필요함
    render() {  
        return(
            // App.js에서 전달받은 props
        <div>
           <CustomerProfile id = {this.props.id} image={this.props.image} name={this.props.name}/>
           <CustomerInfo birth={this.props.birth} gender={this.props.gender} job={this.props.gender}/>
        </div>
        )
    }
}

// 사용자의 image, id를 랜더링하는 부분 
class CustomerProfile extends React.Component{
    render(){
        return (
            <div>
                <img src ={this.props.image} alt = "profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

// 고객의 남은 정보를 출력하는 부분 
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.jop}</p>
            </div>
        )
    }

}


export default Customer; // 다른 컴포넌트에서 사용할 수 있게 내보냄 