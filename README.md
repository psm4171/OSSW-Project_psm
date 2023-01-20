## Customer Management System 
* OSSWP_ React를 사용한 JS 기반 고객 관리 시스템 프로젝트


## App.js는 어떤 역할? 

* App.js는 실질적인 웹 사이트 화면에 대한 내용 출력을 담당하는 역할
* 고객 정보는 변할 수 있는 데이터로, 필요할때마다 서버에서 데이터를 불러오는 역할 
* 서버로부터 JSON 데이터를 모두 받아왔을 때 테이블에 데이터 입력 
* 비동기적으로 async 호출, 고객 목록 데이터를 반환

## server.js는 어떤 역할? 

* 사용자 입장에서 고객의 프로필 이미지 등 고객 정보를 추가하면 서버가 클라이언트에 접근하여 새로운 데이터가 적용된 화면을 볼 수 있도록 구현하는 부분 
* 클라이언트가 customers에 접속을 하면, DB에 접근해서 쿼리
* react 클라이언트에서 해당 비동기 통신을 이용하여 서버에 접근 후 데이터를 가져오는 부분

## Customer.js는 어떤 역할? 

* 고객 데이터가 추가/삭제 되었을 때, 데이터의 행과 셀을 테이블로 구성하는 부분
* CustomerDelete가 실행되었을 때, stateRefresh를 실행하는 부분 

## CustomerAdd.js와 CustomerDelete.js는 고객 데이터를 추가하고 삭제하는 역할을 구성하는 부분


## 프레임워크 및 라이브러리

- Node js : 사용자의 고객정보를 데이터베이스로 관리할 수 있는 웹서버 프로그래밍
- 파일 업로드 요청시 필요한 multer 라이브러리를 사용
- AWS RDS 서비스로 MySQL DB 구축 
- material ui : 디자인 프레임워크 
- react : 웹 프론트엔드 라이브러리 
- axios : 서버와의 통신 목적의 라이브러리

## 프로그램 흐름도  

1.yarn dev를 실행하여 클라이언트와 서버를 동시 구축 

2. 클라이언트 프로그램과 서로 데이터를 주고받는 api역할인 node js를 웹서버로 구축

3. 클라이언트는 해당 서버에 있는 고객의 정보를 받아와서 화면에 출력하는 형태가
필요 

-> react 클라이언트에서 서버에 접근 후 데이터를 가져옴

4. 클라이언트에 전송한 고객 데이터를 하이디SQL을 통해 DB에 업로드 

5. 사용자가 고객 정보를 추가하면 createdDate에 now()를 통해 추가한 시간 저장하고
고객 정보 추가하면 -> App.js의 state 값을 새롭게 갱신  

6. 삭제를 수행했을 때 삭제 체크만 한 뒤에 실제 데이터베이스에는 남겨 놓는 방식 (사용자가 고객 정보를 삭제하면 isDeleted에 count 됨. isDeleted = 1)

## npm이란 node js 기반으로된 각종 패키지를 관리하는 도구 -> react 개발환경 구축 

![npm 설치_1](https://user-images.githubusercontent.com/94738749/210752740-2bddb96a-4333-4ddb-b4f6-96646951d51a.png)

# Getting Started with Create React App!

[react 설치 1](https://user-images.githubusercontent.com/94738749/210752421-80234bb7-be84-4c31-b004-157fd56ad3ad.png)

![react 보안오류 발생 해결](https://user-images.githubusercontent.com/94738749/210752471-987b3f9a-1b22-4ee9-94c6-c046838c49e8.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## yarn start를 이용하여 react 실행
creat react-app 기본적으로 웹 프론트 서버가 구동된 상태에서 소스코드를 수정하면
알아서 수정된 내역에 맞게 컴파일이 다시 이루어지면서 실제 웹 서비스에 반영된다.

![yarn 설치 후 실행_4](https://user-images.githubusercontent.com/94738749/210752822-5535bc33-6bbe-489c-8ba1-55c681081943.png)

## react-app 웹 실행한 결과 

![react 앱 실행 결과_5](https://user-images.githubusercontent.com/94738749/210752529-888af156-7f43-4d66-b4c0-1c67797cfb51.png)


웹프론트엔드 즉, 클라이언트 프로그램과 서로 데이터를 주고받는 api역할인 
node js를 웹서버로 구축  


서버 모듈을 명시하도록 package.json 
// client와 server를 동시에 실행시키는 형태 
 "scripts": {
        "client": "cd client && yarn start",
        "server": "nodemon server.js",
        "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
    },

## yarn dev 명령어를 통해 -> 클라이언트와 서버를 동시에 구축 

![image](https://user-images.githubusercontent.com/94738749/213172366-2717e932-f80a-4012-b012-e3b4cc266f80.png)



## 서버 부분 port:5000에서 클라이언트 부분 port:3000으로 데이터를 전송하여 실행한 부분 

![포트 5000에서 3000으로 데이터를 받아옴](https://user-images.githubusercontent.com/94738749/210944963-96f9e01a-5983-44ba-874f-3b6252cd33f3.png)

## 고객 테이블 생성 

![고객 테이블 생성](https://user-images.githubusercontent.com/94738749/211313578-b866d933-5192-414a-946f-f5b2dbabd02e.png)


## AWS를 통해서 DB를 구축한 화면 

![AWS를 통한 DB 생성](https://user-images.githubusercontent.com/94738749/211307693-d4777466-088d-4b68-8eac-a00e2e772908.png)

## 구축한 DB에 데이터를 삽입하고 클라이언트 측에서 서버에 접근하여 고객 데이터를 가져온 결과 

![DB에 삽입한 데이터와 서버를 통해 데이터를 불러와서 클라이언트에 표시](https://user-images.githubusercontent.com/94738749/211307818-f74f4ed0-6c9a-490d-87fc-3ae87b4667a4.png)

## AWS로 구축한 DB에 입력된 고객 데이터 정보 

![AWS로 구축한 DB에 입력된 고객 데이터 정보 ](https://user-images.githubusercontent.com/94738749/213169006-0c2efa9a-c43d-472f-8449-40aa38562845.png)
 
 ## 고객관리시스템 구성 App Bar UI 
 
![고객관리시스템8_App Bar](https://user-images.githubusercontent.com/94738749/213617615-45ce4d32-f3c1-4818-99da-87c1d3094f74.png)


## 고객관리시스템 구성 화면

![고객관리시스템1](https://user-images.githubusercontent.com/94738749/213617519-b8dd82bc-3adc-4b43-9ecb-0db99af1382a.png)

