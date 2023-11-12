import { useEffect, useState } from "react"
import { MovieList } from "./Movies/MovieList";
//import { apiKey } from "./";
import "./Movies/Movies.css";

export const Home = () => {
    const [loading, setLoading] = useState(false);
    const [movieList, setMovieList] = useState(null);
    const apiKey = "198feab3a8c5e81858df4a15adb9d161";

    /* Popular movies list */
    const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    /* Movie image */
    const imageUrl = `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`;


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
