import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div>
        <h1>Oops... something went wrong. It seems like the page you are trying to access doesn't not exist</h1>

        <Link to="/">Go Home</Link>
    </div>
  );
};
