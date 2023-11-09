import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
//import { useParams } from "react-router-dom";

import { MovieList } from "./Components/MovieList";
import { Movies } from "./Components/Movies";
import { Info } from "./Components/Info";
import { NotFoundPage } from "./Components/NotFoundPage";

// ROUTES
const routes = (
<Routes>
  <Route path="/" element={<Movies />} />
  <Route path="/info" element={<Info />} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>
)

// NAVBAR
const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/info">Info</NavLink>
      </li>
    </ul>
  </nav>
)



export const App = () => {


  return (
  <div>
    <BrowserRouter>
      <NavBar />
      {routes}
    </BrowserRouter>
    {/*<Movies />*/}
    {/*<MovieList />*/}
  </div>
  )
};
