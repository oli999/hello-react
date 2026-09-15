

// "hi" or "bye" 만 담을수 있는 type
let msg1: "hi"|"bye";
let msg2: "hi"|"bye";

msg1 = "hi"
msg1 = "bye"

msg2 = "hi"
msg2 = "bye"

//담을수 없다 
//msg1 = "hello"
//msg2 = "hello"

// 자주사용하는 type 을 미리 type 예약어를 이용해서 정의한다음
type Greet = "hi" | "bye"

//변수나 상수를 만들때 활용할수 있다.
let msg3:Greet;

msg3 = "hi"
msg3 = "bye"
// 담기지 않는다 
//msg3 = "hello"

//문자열 또는 숫자만 담을수 있는 type
type EntityId = string | number

//배열인데 배열에 숫자 2개를 담을수 있는 type 
type Coord = [number, number]

// 함수 type 
type Select = (id: string, isChecked: boolean) => void

// object 의 모양을 type 으로 정의할수도 있다.
type Member = {
    num: number
    name: string
    addr: string
}

// Member type 에 정의한 정확한 모양의 object 만 대입할수 있다 
// 이런 모양의 object 는 type 을 사용하기 보다는 다음 chapter 에서 테스트할 Interface 를 사용하는것이 더 좋다 
const mem1:Member = {num:1, name:"kim", addr:"seoul"}