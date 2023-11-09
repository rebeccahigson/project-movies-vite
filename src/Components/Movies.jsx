import { useEffect, useState } from "react"
import { MovieList } from "./MovieList";
import "./Movies.css";

export const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [movieList, setMovieList] = useState(null);

    const apiKey = import.meta.env.VITE_OPENDB_KEY;
    /* Popular movies list */
    const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

    /* Movie details */
    const detailsUrl = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}&language=en-US`;

    /* Movie image */
    const imageUrl = `https://api.themoviedb.org/3/configuration?api_key=${apiKey} `;

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
        <h1>Loading...</h1>
      )}
    </main>
  )
}
