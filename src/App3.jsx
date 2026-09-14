
// App3.jsx

import { useState } from "react"

export default function App() {

    //오늘의 운세를 상태값으로 관리
    const [fortune, setFortune] = useState("")
    //글 목록을 상태값으로 관리
    const [posts, setPosts] = useState([])

    const clicked = ()=>{
        //상태값을 변경해서 오늘의 운세가 출력되게 한다
        setFortune("동쪽으로 가면 귀인을 만나요!")
    }
    // 글 목록보기 버튼을 눌렀을때 실행할 함수 
    const getPosts = ()=>{
        //글 목록을 api 서버로 부터 받아와서 상태값을 변경해 준다
        fetch("http://localhost:3000/posts")
        .then(res=>res.json())
        .then(data=>{
            //data 는 글목록이 들어 있는 배열이다
            console.log(data)
            //응답된 글목록을 이용해서 상태값을 변경한다 
            setPosts(data)   
        })
    }

    return (
        <div>
            <h1>useState 사용하기</h1>
            <button onClick={clicked}>오늘의 운세보기</button>
            <p>{fortune}</p>

            <button onClick={getPosts}>글 목록보기</button>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.views}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

