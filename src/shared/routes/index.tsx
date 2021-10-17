import { Route, Switch } from "react-router-dom";
import { useUser } from "../../hooks/User";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Admin from "../../pages/Admin";
import AnimePage from "../../pages/Anime";
import Styleguide from "../../pages/Styleguide";

const Routes = () => {
  const { user } = useUser();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      {user.permission === "mod" && <Route path="/admin" component={Admin} />}
      {user.permission === "admin" && <Route path="/admin" component={Admin} />}
      <Route path="/animes/:id" component={AnimePage} />
      <Route exact path="/styleguide" component={Styleguide} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
