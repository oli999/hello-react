
// javascript 함수 
function App() {
  let name="김구라";
  let fortune="동쪽으로 가면 귀인을 만나요";
  // jsx 객체를 활용해 보자
  let fortune2 = <p>
      오늘의 운세2: <strong>서쪽으로 가면 누군가를 만나요</strong>
  </p>;
  // 배열에 jsx 객체를 넣어보자
  let names = [
    <li>김구라</li>,
    <li>해골</li>,
    <li>원숭이</li>
  ];

  // api 서버로 부터 받아온 정보라고 가정하자
  let foods = ["김밥","라면","떡복기"];
  // api 서버로 부터 받아온 정보를 이용해서 jsx 객체가 들어 있는 배열을 map() 함수를 이용해서 만들기
  let result = foods.map( (item) => {
    return <li>{item}</li>;
  } );
  //웹브라우저 콘솔창에 테스트로 출력하기
  console.log(result);
  /* result 는

    [<li>김밥</li>, <li>라면<li>, <li>떡복기<li>]

    형식의 배열이다 
  */

  // map() 함수 안에 전달한 함수를 좀더 간단히 표현하면 아래와 같다
  let result2 = foods.map( item => <li>{item}</li> );


  // 이 함수에서 리턴한 jsx 객체를 이용해서  <div id="root"> </div> 안쪽을 체워서 UI 가 구성된다 
  return (
   <div>
      <h1>Hello, React js</h1>
      <button>눌러보셈</button>
      <p>
        이름 : <strong>{name}</strong>
      </p>
      <p>
        오늘의 운세 : <strong>{fortune}</strong>
      </p>
      {fortune2}
      <h2>친구 목록</h2>
      <ul>
        {names}
      </ul>
      <h2>음식 목록</h2>
      <ul>
        {result}
      </ul>

      <h2>음식 목록2</h2>
      <ul>
        {result2}
      </ul>

      <h2>음식 목록3</h2>
      <ul>
        { foods.map(item=><li>{item}</li>) }
      </ul>
   </div>
  )
}

export default App
