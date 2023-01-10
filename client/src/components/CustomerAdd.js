// 디자인이 없는 고객 추가 양식을 만드는 부분 
// 서버와의 통신 목적인 axios

import React from 'react';
import { post } from 'axios';


// 사용자 프로필 이미지는 파일 형태: null
class CustomerAdd extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            file: null,
            userName: '',
            birth: '',
            gender: '',
            job: '',
            fileName: ''
        }

    }

    // 이벤트 변수를 전달 받아서 handleFormSubmit = (e) => {} , addCustomer 함수를 실행
    //  e.preventDefault() 데이터가 서버로 전달됨에 있어서 오류 발생하지 않도록 하는 함수 
    // .then 서버로부터 response가 건너오면, 건너온 데이터를 콘솔창에 출력 
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);

            })

            this.setState({
                file: null,
                userName: '',
                birth: '',
                gender: '',
                job: '',
                fileName: ''
            })
            window.location.reload();
    }


    // file 값이 변경됐을 때 불러오는 handleFileChange()
    // file 값을 변경, e.target files[0]을 한 이유 : 
    // 파일을 업로드할 때, 프로필 이미지인 하나의 파일만 선택해서 올리도록 설정하기 때문에 files[0] 
    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value 

        })
    }


    // file 값이 변경됐을 때 불러오는 handleValueChange()
    // 사용자가 입력한 이름,생년월일 등을 반영하는 부분 nextState[e.target.name] = e.target.value; 
    // nextState 값을 이용하여 현재 setState 값을 갱신 
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }


    // 상태변화 감지 onChange 
    // api 주소로 데이터를 보낼 수 있도록 함 
    // this.state.file 데이터를 이미지로 전송 
    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name',this.state.userName);
        formData.append('birth',this.state.birth);
        formData.append('gender',this.state.gender);
        formData.append('job',this.state.job);


        // 파일이 포함된 데이터를 서버로 전송하고자 할 때는 웹 표준에 맞는 헤더 추가
        // 즉 formData에 파일이 있을 경우 'multipart/form-data' 설정
        const config = {
            headers: {
                'content-type' : 'multipart/form-data'
            }
           
        }
        return post(url, formData, config);
}


    // 고객 추가 버튼 눌렀을 때 handleFormSubmit 수행 
    // form은 내부적으로 어떤 값들을 서버로 보내줄 수 있는지 설정 : input
    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지: <input type ="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>  
                이름 : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                생년월일: <input type="text" name="birth" value={this.state.birth} onChange={this.handleValueChange}/><br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>    
        )
    }
}

export default CustomerAdd;
