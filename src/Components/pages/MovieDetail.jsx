import React from "react";
import { useLocation, useParams } from 'react-router-dom'

function MovieDetail() {

    const { title } = useParams(); 
    const { state } = useLocation();

    console.log(title);
    console.log(state);

    return (
	    <div
        style={{
            display: "flex",
        }}>
            <img src={state.url["Base_url"]+state.poster_path["poster_path"]}
            style={{width: "250px",marginTop: "27px", marginLeft:"150px"}}
            alt={title}/>
            
            <h2>{title}</h2>
        </div>
    );
}

export default MovieDetail;