import { Switch } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Home from "../../pages/Home";
import Route from "./route";

const Routes = () => {
  // acessar o campo usuario_permissao do objeto user usando o hook User, que possui as informações:
  // "e_cliente": true,
  // "e_representante": false,
  // "e_funcionario": false
  // E fazer uma lógica pra renderizar o dashboard correto

  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/styleguide" component={Styleguide} /> */}
      {/* <Route path="/login" component={Login} />
      <Route exact path="/dashboard" component={***client, admin ou representative Dashboard***} isPrivate />
      <Route path="*" component={NotFound} />  */}
    </Switch>
  );
};

export default Routes;
