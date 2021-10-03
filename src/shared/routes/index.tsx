import { Switch } from "react-router-dom";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route path="*" component={NotFound}/> 
    </Switch>
  );
};

export default Routes;
