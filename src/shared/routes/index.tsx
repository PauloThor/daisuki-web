import { Route, Switch } from "react-router-dom";
import { useUser } from "../../hooks/User";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Admin from "../../pages/Admin";
import AnimePage from "../../pages/Anime";
import EpisodePage from "../../pages/Episode";
import AnimeList from "../../pages/AnimeList";
import PasswordRecovery from "../../pages/PasswordRecovery";
import Styleguide from "../../pages/Styleguide";

const Routes = () => {
  const { user } = useUser();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/animes/:name" component={AnimePage} />
      <Route path="/animes/:name/:episode_number" component={EpisodePage} />
      <Route path="/genres/:genre">
        <AnimeList request="genre" />
      </Route>
      <Route path="/search/:search">
        <AnimeList request="search" search />
      </Route>
      <Route
        exact
        path="/password-recovery/:id/:token"
        component={PasswordRecovery}
      />
      {user.permission === "mod" && <Route path="/admin" component={Admin} />}
      {user.permission === "admin" && <Route path="/admin" component={Admin} />}
      <Route path="/:filter">
        <AnimeList request="filter" />
      </Route>
      <Route exact path="/styleguide" component={Styleguide} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
