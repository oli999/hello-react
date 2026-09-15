
// 함수 type 도 가지고 있는 interface

interface UserProfile{
    id: number
    name: string
    // 함수 타입: 매개변수로 string을 받고, 반환값은 없는(void) 함수
    changeName: (newName: string)=>void
}

const user1: UserProfile = {
    id:1,
    name:"kim",
    changeName:function(newName:string){
        //매개변수로 전달된 이름을 이용해서 이름 수정하는 함수
        this.name=newName
    }
}

console.log(user1.name)

user1.changeName("park")

console.log(user1.name)