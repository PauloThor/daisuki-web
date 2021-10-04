import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Provider from "./hooks";
import Routes from "./shared/routes";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
