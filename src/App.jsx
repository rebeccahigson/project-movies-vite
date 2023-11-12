import { BrowserRouter} from "react-router-dom";
import { routes } from "./Routes";

export const App = () => {

  return (
    <div>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  )
};
