// test06.ts

/*
    [ function type ]

    함수 만드는 방법

    function 함수명(매개변수명:type, 매개변수명2:type, ... ):리턴type{
    
    }

*/

// number type 2 개를 전달 받아서 number type 을 리턴해주는 함수 
function sum(num1:number, num2:number): number{
    return num1+num2
}

// sum 함수를 a 에 대입한다음 a 의 type 확인해보기 
const a = sum;

// string type 1 개를 전달 받고 어떤 데이터도 리턴해주지 않는 함수 
function printMsg(msg:string):void{
    console.log(msg)
}

// b 의 type 확인해보기 
const b = printMsg;
// c 의 type 을 명시적으로 선언하면
const c: (msg:string)=>void = printMsg;

// return type 을 명시 하지 않으면 return type 을 infer 한다 
function getMsg(){
    return "hello"
}

const d = getMsg;