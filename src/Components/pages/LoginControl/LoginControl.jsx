import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function LoginControl(){
    const [isloggedIn, setisloggedIn] = useState(true);

    const navigate = useNavigate();
    const changeState = () => {
        setisloggedIn(!isloggedIn);
        navigate(`/login`,{
            state: {
                state: { isloggedIn }
        }});
    }

    
    return(
        <div>
            <p style={{color: "white"}}>
                <button style={{borderRadius: "15px", border: "0px", marginRight: "10px", padding: "3px", paddingLeft: "10px", paddingRight: "10px"}} 
                onClick={changeState}>{isloggedIn ? '로그인' : '로그아웃'}</button>
                {isloggedIn ? "로그인 해주세요!" : "환영합니다!"}
            </p>
        </div>
    );
}

export default LoginControl;