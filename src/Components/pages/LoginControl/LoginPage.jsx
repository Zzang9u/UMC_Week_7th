import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LoginPage(){

    const [filledState, setFillState] = useState(true); //true가 이메일과 비번을 다 채웠을 때, false가 조건에 만족하지 않았을 때
    const changeState = () =>{
        setFillState(!filledState);
    }
    const {state} = useLocation();
    const navigate = useNavigate();
    const onClickImg = () => {
        navigate('/',{});
    };

    if(state.state["isloggedIn"] == false){
        return(
            <div style={{marginLeft:"290px", marginBottom:"0px"}}>
                <h2>이메일과 비밀번호를<br/>입력해주세요</h2>
                
                <h5 style={{
                    marginBottom:"7px"
                }}>이메일 주소</h5>
                
                <input
                id="email" 
                type="email"
                placeholder="이메일"
                required
                style={{
                    fontSize:"16px",
                    width:"230px",
                    border:"solid",
                    borderColor:"",
                    borderRadius:"10px",
                    marginright:"100px",
                    padding:"20px",
                    paddingRight:"630px"
                }}></input>

                <p style={{
                    color:"red",
                    fontSize:"13px"
                }}>올바른 이메일을 입력해주세요.</p>
                
                <h5 style={{
                    marginBottom:"7px"
                }}>비밀번호</h5>
                
                <input
                id="pw" 
                type="password"
                minLength="8"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상" 
                style= {{
                    fontSize:"16px",
                    width: "260px",
                    border:"solid",
                    borderColor:"",
                    borderRadius:"10px",
                    padding:"20px",
                    paddingRight:"600px"
                    }}/>
                
                <p
                onClick={onClickImg}
                style={{
                borderRadius:"40px",
                color:"white",
                backgroundColor:"#22254b",
                marginRight:"360px",
                paddingTop:"15px",
                paddingBottom:"15px",
                textAlign:"center"}}>확인</p>
            </div>
        );
    } else {
        return(
            <div style={{marginLeft:"10px"}}>
                LoginPage
            </div>
        );
    }

    
};

export default LoginPage;