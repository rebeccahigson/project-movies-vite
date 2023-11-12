import { Routes, Route} from "react-router-dom"
import { Home } from "./Components/Home";
import { NotFoundPage } from "./Components/NotFoundPage";
import { MoviePage } from "./Components/Movies/MoviePage";

// ROUTES
export const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/movie/:movieId" element={<MoviePage />} />
    </Routes>
);
