import { Route, Switch } from "react-router-dom";
import { useUser } from "../../hooks/User";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Admin from "../../pages/Admin";
import AnimePage from "../../pages/Anime";
import AnimeList from "../../pages/AnimeList";
import Styleguide from "../../pages/Styleguide";

const Routes = () => {
  const { user } = useUser();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/animes/:name" component={AnimePage} />
      <Route path="/genres/:genre">
        <AnimeList request="genre" />
      </Route>
      <Route path="/search/:search">
        <AnimeList request="search" search />
      </Route>
      <Route path="/:filter">
        <AnimeList request="filter" />
      </Route>
      {user.permission === "mod" && <Route path="/admin" component={Admin} />}
      {user.permission === "admin" && <Route path="/admin" component={Admin} />}
      <Route exact path="/styleguide" component={Styleguide} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
