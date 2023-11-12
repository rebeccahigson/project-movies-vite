import { useEffect, useState } from "react"
import { MovieList } from "./Movies/MovieList";
import "./Movies/Movies.css";
import { ApiKey } from "./Movies/ApiKey";

export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [movieList, setMovieList] = useState(null);
    

    /* Popular movies list */
    const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`;

    /* Movie image */
    const imageUrl = `https://api.themoviedb.org/3/configuration?api_key=${ApiKey}`;


    const fetchMovies = async () => {
        try {
        const response = await fetch(moviesUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch movies");
        }
        const movieData = await response.json();
        //console.log(movieData.results[0].title)
        setMovieList(movieData.results);

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(true);
        }
    }

    useEffect(() => {
        fetchMovies();
      }, []);

  return (
    <main className="main">
      {loading ? (
        <MovieList movieList={movieList} />
      ) : (
        <h1>Loading movies...</h1>
      )}
    </main>
  )
}
