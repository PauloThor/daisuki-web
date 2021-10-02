import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import store from "./store";
import Routes from "./shared/routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
