import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiKey } from "./ApiKey";

export const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Assuming you have a loading state

  // Image URL:s
  const imgUrl = `https://image.tmdb.org/t/p/`;
  const posterImgUrl = imgUrl + "w500";
  const backDropImgUrl = imgUrl + "w1280";

 //

  const details = movieDetails?.title ? movieDetails : null;

  /* Movie details */
  const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`;

  const fetchDetails = async () => {
    try {
      const response = await fetch(detailsUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const detailsData = await response.json();
      setMovieDetails(detailsData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!details) {
    return <p>Movie not found</p>;
  }


  const pageBgImg = {
    backgroundImage: `url(${backDropImgUrl}${details.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    paddingBottom: "80px",
  };

  return (
    <section style={pageBgImg}>
      <div className="page-wrapper">

        {/* Header*/}
        <header className="page-header">
          <nav className="page-Nav">
            <NavLink to="/">Back</NavLink>
          </nav>
        </header>

        <div className="page-container">
          
          <img src={`${posterImgUrl}${details.poster_path}`} alt="Movie cover image"  className="page-movieImg"/>  
          <div className="page-infoContainer">
            <h1>{details.title} <span className="page-rating">⭐ {details.vote_average.toFixed(1)}</span></h1>
            <p>{details.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
