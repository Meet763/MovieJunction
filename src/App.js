import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// f1203513

// const movie1 = {
//         "Title": "Superman, Spiderman or Batman",
//         "Year": "2011",
//         "imdbID": "tt2084949",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"   
// }

const App = () => {
    const [movies, setmovies] = useState([]); 
    const [searchTerm, setsearchTerm] = useState('')

  const API_URL = 'https://www.omdbapi.com?apikey=f1203513';

  const SearchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
  
      setmovies(data.Search);
  }   

  useEffect(() =>  {
      SearchMovies('')
  }, [])
  
  return  (
      <div className="app">
        <h1>MoviesJunction</h1>

        <div className="search">
            <input type="text" placeholder="Search Movies" 
                value={searchTerm} onChange={(e) => setsearchTerm (e.target.value)}
            />

            <img src={SearchIcon} alt="Search" 
            onClick={() => SearchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0
              ?(
                <div className="container">
                  {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                  ))}
                </div>
              ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
              )
        }
        
      </div>
  );
} 

export default App;
