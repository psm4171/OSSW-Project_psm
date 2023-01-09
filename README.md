## Customer Management System 
* OSSWP_ React와 Node js를 사용한 고객 관리 시스템 웹페이지 프로젝트

![고객 관리 시스템](https://user-images.githubusercontent.com/94738749/210760363-7d6fcd10-0537-4ee6-b325-1f6c634a156f.png)

![고객 관리 시스템2](https://user-images.githubusercontent.com/94738749/210760417-6547b6fe-4676-43b2-833f-7d86a08877f2.png)

![고객 관리 시스템3](https://user-images.githubusercontent.com/94738749/210760437-bb71ec92-50b9-440b-8829-bb8650d28e57.png)




- Node js : 사용자의 고객정보를 데이터베이스로 관리할 수 있는 웹서버 프로그래밍
- material ui : 디자인 프레임워크 
- react : 웹 프론트엔드 라이브러리 

ㅁ npm이란 node js 기반으로된 각종 패키지를 관리하는 도구 -> react 개발환경 구축 

![npm 설치_1](https://user-images.githubusercontent.com/94738749/210752740-2bddb96a-4333-4ddb-b4f6-96646951d51a.png)

# Getting Started with Create React App!

[react 설치 1](https://user-images.githubusercontent.com/94738749/210752421-80234bb7-be84-4c31-b004-157fd56ad3ad.png)

![react 보안오류 발생 해결](https://user-images.githubusercontent.com/94738749/210752471-987b3f9a-1b22-4ee9-94c6-c046838c49e8.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

ㅁ yarn start를 이용하여 react 실행
creat react-app 기본적으로 웹 프론트 서버가 구동된 상태에서 소스코드를 수정하면
알아서 수정된 내역에 맞게 컴파일이 다시 이루어지면서 실제 웹 서비스에 반영된다.

![yarn 설치 후 실행_4](https://user-images.githubusercontent.com/94738749/210752822-5535bc33-6bbe-489c-8ba1-55c681081943.png)

ㅁ react-app 웹 실행한 결과 

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

yarn dev 명령어를 통해 -> 클라이언트와 서버를 동시에 구축 

![App 서버로부터 고객 정보를 받아오는 부분](https://user-images.githubusercontent.com/94738749/210943787-d71e8e3d-fe70-43db-bd50-0cad71335243.png)

서버 부분 port:5000에서 클라이언트 부분 port:3000으로 데이터를 전송하여 실행한 부분 
![포트 5000에서 3000으로 데이터를 받아옴](https://user-images.githubusercontent.com/94738749/210944963-96f9e01a-5983-44ba-874f-3b6252cd33f3.png)

AWS를 통해서 DB를 구축한 화면 
![AWS를 통한 DB 생성](https://user-images.githubusercontent.com/94738749/211307693-d4777466-088d-4b68-8eac-a00e2e772908.png)

구축한 DB에 데이터를 삽입하고 클라이언트 측에서 서버에 접근하여 고객 데이터를 가져온 결과 
![DB에 삽입한 데이터와 서버를 통해 데이터를 불러와서 클라이언트에 표시](https://user-images.githubusercontent.com/94738749/211307818-f74f4ed0-6c9a-490d-87fc-3ae87b4667a4.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
