import React, {useEffect, useState, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

//https://react-http-325a1-default-rtdb.firebaseio.com/
//https://swapi.dev/api/films/

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => { //alternative - much simpler syntax to work with asynchronous functions like http requests
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch('https://react-http-325a1-default-rtdb.firebaseio.com/movies.json') //.json is needed  
      if (!response.ok) { //you can also manually check response.status - concrete status code
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      
      // this wasn't on the previous state (starwars API)
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
  
      // const transformedMovies = data.results.map(movieData => {
      //   return {
      //     id: movieData.episode_id, 
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date
      //   };
      // });
      // setMovies(transformedMovies);

      setMovies(loadedMovies)
    } catch (error) {
      setError(error.message);
    }      
    setIsLoading(false); //done loading either way
  }, []);
  
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  

  // function fetchMoviesHandler() {
  //   fetch('https://swapi.dev/api/films/', { //returns PROMISES - allows you to work with then()
  //     //default: GET, this could be used to change that or customize a little bit
  //     })
  //     .then(response => { //.catch() an error
  //     return response.json(); //built-in method to parse json into JS object
  //     })
  //     .then(data => { //after the first promise is converted
  //       const transformedMovies = data.results.map(movieData => {
  //         return {
  //           id: movieData.episode_id, //we could achieve the same result by modifying the properties to the same name as the json
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date
  //         };
  //     });
  //     setMovies(transformedMovies); //results is the key to access the data in this particular "database"
  //   });
  // }

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-325a1-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST', //what happens here depends on the backend used
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json' //not needed for firebase, but for most rest apis
      }
    });
    const data = await response.json(); //could also add error handling and so on
    console.log(data);
  }

  let content = <p>Found no movies.</p>; //or putting various inline conditions

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if(error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
