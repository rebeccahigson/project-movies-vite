import { Link } from "react-router-dom";
import { MoviePage } from "./MoviePage";
import { Info } from "./Info"

export const MovieList = ({ movieList }) => {

    return (
      <section className="movieList">
        {movieList.map((movie) => (
          <div key={movie.id} className="movieCard">

            <Link to="/Info" element={<Info />}>
                <img src="https://images.red.bbmbonnier.se/EloquaImages/clients/BonnierBusinessMediaAB/%7B5fc7bf85-42f0-4b3a-91c5-8b17641fd30b%7D_DM_17_11_neurologi.png" alt="Movie cover image" width="100%"/>

                <div className="movieInfo">
                    <h1>{movie.original_title}</h1>
                    {/* <p>{movie.vote_average}</p> */}
                    <p>Released {movie.release_date}</p>
                </div>
            </Link>
            
          </div>
        ))}
      </section>
    );
  };
  