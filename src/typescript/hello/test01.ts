


// num 이라는 변수를 number type 으로 명시적으로 선언해서 값을 대입하기
let num:number = 1;

// num2 라는 변수를 만들어서 number type 을 넣어주면 num2 는 number type 이라고 자동으로 추론(infer) 되어서
// number type 으로 결정된다 
let num2 = 2;

// number type 변수에 10 을 넣는건 문제가 되지 않는다.
num = 10;

// number type 변수에 string type 을 넣는건 typescript 에서는 허용되지 않는다 
//num = "kim";

/*
    1. typescript 는 웹브라우저나 node js 에서 해석하지 못한다 (원래 존재하지 않는 문법)
    2. 개발시에 typescript 의 엄격한 문법상에서 개발을 한다
    3. 개발이 끝난후 typescript 컴파일러로  javascript 소스코드로 변환한다
    4. 변환된 javascript 소스코드를 웹브라우저나 node js 가 실행한다  
*/