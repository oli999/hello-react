
// 자주 사용되는 interface 를 공부해 보자

interface Member{
    num: number
    name: string
    isMan: boolean
}

let m1: Member;

// Member interface type 에 부합하는 object 만 대입할수 있다.
m1 = {num:1, name:"kim", isMan:true}
let m2: Member = {num:2, name:"park", isMan:false}

interface Person{
    firstname: string
    lastname: string
    email?: string  // ? 를 붙이면 optional 이다 (없어도 된다)
}

let p1: Person = {firstname:"kim", lastname:"gura"} // email 이 없어도 Person type 이다 

let p2: Person = {firstname:"lee", lastname:"jungho", email:"aaa@naver.com"}

interface Todo{
    readonly id: number // 값이 한번 결정되면 수정불가 
    content: string
}

let t1: Todo = {id:1, content:"공부하기"}

// 수정가능 
t1.content = "잠자기"
// readonly 이기 때문에 수정 불가 
//t1.id = 2


