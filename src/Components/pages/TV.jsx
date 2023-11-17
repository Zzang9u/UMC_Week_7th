import React from "react";
import * as C from '../Movie/Movie.style';
import { useNavigate } from "react-router-dom";

const Base_url = "https://image.tmdb.org/t/p/w1280/";

function TV({name, poster_path, vote_average}){

    const navigate = useNavigate();
    const onClickImg = () => {
        navigate(`/tv/${name}`,{
                state: {
                    url: { Base_url },
                    poster_path: {poster_path}
                }});
        };

    return(
        <div>
            <C.Container onClick={onClickImg}>
                <C.Img>
                    <img src={Base_url + poster_path} alt={name}/>
                </C.Img>
                <C.Info >
                    <h4>{name}</h4>
                    <span>{vote_average}</span>
                </C.Info>
            </C.Container>
        </div>
    );
}

export default TV;