// test05.ts

/*
    [ any type ]

    - java 의 Object 와 비슷한 type
    - any type 을 남발하면 typescript 의 장점이 사라진다. 
    - 경우에 따라 사용 못하도록 설정 할수도 있다
*/

// 어떤 type 도 담을수 있는 any type -> javascript 의 변수 type 이 원래 any type 이나 마찬가지이다 
let anything:any;

anything=10
anything="kim"
anything=true
anything=[]
anything={}

// json 문자열을 파싱하면 any type 이 리턴된다.
let json:string = `
    {
        "num":1,
        "name":"김구라",
        "isMan":true
    }
`
//어떤 함수가 any type 을 리턴할수도 있다.
let result:any = JSON.parse(json);
