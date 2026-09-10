// src/App2.jsx 파일

import { useState } from "react";

function App(){

   /* 
    count 를 상태값으로 관리하기
    - useState() 는 [] 배열을 리턴한다
    - 배열의 0 번방에는 현재값, 배열의 1번방에는 값(상태)를 변경할때 사용하는 함수가 들어 있다.
    - 0 번방에 있는 값을 count 라는 상수에 담고 , 1 번방에 있는 값을 setCount 라는 상수에 담는다
    - useState(초기값)  
   */
   const [count, setCount] = useState(0);

    //함수를 만들고 버튼을 눌렀을때 해당 함수가 호출되도록 연결한다
    const clicked = ()=>{
        console.log("버튼을 눌렀네!");
        //버튼을 눌렀을때 setCount() 함수를 호출하면서 새로운 상태값을 전달한다
        //새로운 상태값을 전달하면 App() 함수가 다시 호출되고
        //새로운 상태값이 반영된 UI 가 리턴된다
        //새롭게 리턴된 UI 가 웹브라우저의 화면에 나타난다 
        setCount(count+1);
    }

    return (
        <div>
            <h1>App2.jsx 입니다</h1>
            <button onClick={clicked}>{count}</button>
        </div>
    );
}

export default App;