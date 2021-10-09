import { Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Route from "./route";
import AnimePage from "../../pages/Anime";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/animes/:id" component={AnimePage} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
