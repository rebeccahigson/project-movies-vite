import { Link } from "react-router-dom";

export const MovieList = ({ movieList }) => {
  
  // Image URL:s
  const imgUrl = `https://image.tmdb.org/t/p/`;
  const posterImgUrl = imgUrl + "w500";

    return (
      <section className="movieList">

        {movieList.map((movie) => (

            <div key={movie.id} className="movieCard">
              <Link to={`/movie/${movie.id}`}>

                  <div className="hoverOverlay">
                    <div className="movieInfo">
                      <h1>{movie.original_title}</h1>
                      <p>⭐ {movie.vote_average.toFixed(1)}</p>
                      <p>Released {movie.release_date}</p>
                    </div>
                  </div>

                  <img src={`${posterImgUrl}${movie.poster_path}`} alt="Movie cover image" width="100%"/>  
              </Link>
            </div>
        ))}
      </section>
    );
};
  
