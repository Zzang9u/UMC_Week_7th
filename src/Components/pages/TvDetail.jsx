import React from "react";
import { useLocation, useParams } from 'react-router-dom'

function TvDetail() {

    const { name } = useParams(); 
    const { state } = useLocation();

    console.log(name);
    console.log(state);

    return (
	    <div
        style={{
            display: "flex",
        }}>
            <img src={state.url["Base_url"] + state.poster_path["poster_path"]}
            style={{width: "250px",marginTop: "27px", marginLeft:"150px"}}
            alt={name}/>
            
            <h2>{name}</h2>
        </div>
    );
}

export default TvDetail;