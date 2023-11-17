import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound(){
    
    const navigate = useNavigate();
    const onClickImg = () => {
        navigate('/',{});
    };
    
    return(
        <div>    
            <div style={{marginLeft:"160px", marginTop:"130px"}}>
                <h2 style={{fontSize:"30px"}}>해당 페이지를 찾지 못했습니다.</h2>
                <p style={{fontSize:"20px"}}>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
                <h3 style={{color: "red"}} onClick={onClickImg}>메인 페이지로 이동</h3>
            </div>
        </div>
    );
}

export default NotFound;