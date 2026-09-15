// typescript/01_datatype/test01.ts

// number type 변수 선언하기
let num:number;

// 미리 만들어진 number type 변수에 값 대입하기
num=1;

// number type 변수를 선언과 동시에 값 대입하기
let num2:number=2;

// 변수를 선언과 동시에 값을 대입하면 type 이 자동 추론(infer) 되어서 변수는 해당 type 으로 고정된다.
let num3=3;

// string type
let myName:string="김구라";
// type infer
let yourName="해골"

// boolean type
let isMan:boolean=true;
// type infer
let isRun=false;

console.log(myName);


