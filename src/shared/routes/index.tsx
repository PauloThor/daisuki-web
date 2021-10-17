import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Admin from "../../pages/Admin";
import AnimePage from "../../pages/Anime";
import Styleguide from "../../pages/Styleguide";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/animes/:name" component={AnimePage} />
      <Route exact path="/styleguide" component={Styleguide} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
