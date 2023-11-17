import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as D from './Movie.style';

const Base_url = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, poster_path, vote_average}){
    
    const navigate = useNavigate();
    const onClickImg = () => {
    navigate(`/movie/${title}`,{
            state: {
                url: { Base_url },
                poster_path: {poster_path}
            }});
    };

    return(
        <div>
            <D.MvContainer onClick={onClickImg}>
                <D.Img>
                    <img src={Base_url + poster_path} alt={title}/>
                </D.Img>
                <D.MvInfo >
                    <h4>{title}</h4>
                    <span>{vote_average}</span>
                </D.MvInfo>
            </D.MvContainer>
        </div>
    )
}

export default Movie;