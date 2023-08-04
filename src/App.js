
import './App.css';
import MovieDisplay from './Components/MovieDisplay';
import Form from './Components/Form';
import { useState,useEffect } from 'react';


function App() {

  const [movie, setMovie] = useState(null);
  // const apiKey = {process.env.REAC_APP_MOVIE_API_KEY}
  
    const getMovie = async (searchTerm)=>{
      try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=${searchTerm}`)
        const data = await res.json();
        setMovie(data)
      } catch (error) {
        console.log(error);
      }
      
    } 
    useEffect(() => {
      getMovie("spyder");
    }, []);
  
  return (
    <div className="bg-slate-300 items-center">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
