
// item 의 type 을 getData() 함수를 사용할때 동적으로 전달하고 싶다면?
function getData<T>(item:T){

    return item
}

// <여기에 전달한 type> 이 item 의 type 으로 결정된다.
const result:number = getData<number>(10)

// 함수를 사용할때 함수 내부에서 사용되는 type 을 결정해야 하는 경우도 있다.
const result2:string = getData<string>("kim")

const result3:boolean = getData<boolean>(true)

// generic type 을 전달받는 interface 
interface Member<T>{
    id: T
    name: string
    email?: string
}

// id 를 number type 으로 전달해야 한다
const m1: Member<number> = {id:1, name:"kim"}

// id 를 string type 으로 전달해야 한다 
const m2: Member<string> = {id:"aaa", name:"park", email:"xxx"}