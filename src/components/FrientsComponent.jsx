// src/components/FriendsComponent.jsx

// props 에 names 라는 키값으로 배열이 전달되어야 정상동작하는 component
function FriendsComponent(props) {
    
    return (
        <>
            <h2>친구 목록입니다</h2>
            <ul>
                {props.names.map(item => <li>{item}</li>)}
            </ul>
        </>
    );
}

export default FriendsComponent;