import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from './Components/Movie/Movie';
import { movies } from './movieDummy';
import { tv } from './tvDummy';
import Home from "./Components/pages/Home";
import Header from "./Components/pages/Header";
import Celebirity from "./Components/pages/Celebirity";
import TV from "./Components/pages/TV";
import NotFound from "./Components/pages/NotFound";
import MovieDetail from "./Components/pages/MovieDetail";
import TvDetail from "./Components/pages/TvDetail";
import LoginPage from "./Components/pages/LoginControl/LoginPage";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie" element={
            <div className="app-container">
            {
              movies.results.map((item) =>{
                return (
                  <div>
                    <Movie
                  title = {item.title}
                  poster_path = {item.poster_path}
                  vote_average = {item.vote_average}
                  />
                  </div>
                )
              })
            }
          </div>
          } />
          <Route path={`/movie/:title`} element={<MovieDetail />} />
          <Route path="/celebrity" element={<Celebirity />}/>
          <Route path="/tv" element={
            <div className="app-container">
            {
              tv.results.map((item) =>{
                return (
                  <div>
                    <TV
                  name = {item.name}
                  poster_path = {item.poster_path}
                  vote_average = {item.vote_average}
                  />
                  </div>
                )
              })
            }
            </div>
          }/>
          <Route path={`/tv/:name`} element={<TvDetail />} />
          <Route path="*" element={<NotFound />}/>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
