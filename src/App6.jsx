
// bootstrap css 로딩하기 (import)

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap'
import AlertModal from './components/AlertModal';

export default function App6(){
    //알림을 띄울지 말지를 상태값으로 관리하기
    const [show, setShow] = useState(false);
    //모달을 띄울지 말지를 상태값으로 관리하기
    const [showModal, setShowModal] = useState(true);

    return <div className='container'>
        <h1>Bootstrap 과 React Bootstrap 사용해보기</h1>
        <button className='btn btn-primary'>버튼1</button>
        <button className='btn btn-outline-success'>버튼2</button>

        <Alert variant="success">React Bootstrap 사용해보기</Alert>
        <Alert variant="danger">React Bootstrap 사용해보기</Alert>

        <Alert variant="danger"  dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
            </p>
        </Alert>

        <Button variant='danger' onClick={()=>{
            //원래 show 값의 반대값 넣어주기 true -> false -> true
            setShow(!show)
        }}>알림 토글</Button>
        {
         show &&  <Alert variant="danger">
                <Alert.Heading>알림</Alert.Heading>
                <p>실패 했습니다!</p>
            </Alert>
        }

        <AlertModal show={showModal} message={"안녕하세요"} onYes={()=>setShowModal(false)}/>
    </div>
}