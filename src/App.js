import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';


// 보내는 데이터 명시
const customers = [
{
  'id' : 1,
  'image' : 'https://placimg.com./64/64/any',
  'name': '가나다',
  'birth' : '990101',
  'gender' : '남자',
  'job' : '대학생'

},

{
  'id' : 2,
  'image' : 'https://placimg.com./64/64/any',
  'name': '김대한',
  'birth' : '010504',
  'gender' : '남자',
  'job' : '대학생'
},

{
  'id' : 3,
  'image' : 'https://placimg.com./64/64/any',
  'name': '김민국',
  'birth' : '980504',
  'gender' : '남자',
  'job' : '대학생'
}
]


class App extends Component {
  render(){
  return (
    // props를 통한 데이터 전달 
    // map형태로 반복, 각 원소를 구분하는 key값 (id값이 다르기 때문에 c.id로 설정)
    <div>
      {
        customers.map(c => {
          return(
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
   </div>
  );
}
}


export default App;
