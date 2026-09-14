import FriendsComponent from "./components/FrientsComponent"

//함수형 컴포넌트 
function App5(){
   
    const names=["김구라","해골","원숭이"]
    
    return (
        <div>
            <h1>컴포넌트 테스트</h1>
            <Fortune />
            <Fortune/>
            <Fortune/>
            <Person name={"김구라"} color={"#00ff00"}/>
            <Person name={"해골"} color={"#00ffff"}/>
            <Person2 name={"원숭이"} color={"#ff0000"}/>
            <FriendsComponent names={names}/>
        </div>
    )
}

// 이파일(App5.jsx) 를 어디선가 import 하면 App5 함수를 돌려주겠다는 의미
export default App5

// 속성으로 전달한 값이 args object 에 담겨서 전달이 된다 
function Person(args){
    return <>
        <p>오늘의 인물: <strong style={{color:args.color}}>{args.name}</strong></p>
    </>
}

// 전달되는 object 를 구조분해 할당해서 함수의 매개변수에 담겠다는 의미
function Person2({name, color}){
    return <>
        <p>오늘의 인물: <strong style={{color:color}}>{name}</strong></p>
    </>
}

//하나의 독립적인  함수형 component 를 만들기 
function Fortune(){

    return <>
        <p>오늘의 운세: <strong>동쪽으로가면 귀인을 만나요</strong></p>
    </>
}