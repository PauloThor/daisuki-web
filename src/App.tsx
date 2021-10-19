import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Provider from "./hooks";
import Toaster from "./components/Toaster";
import Routes from "./shared/routes";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <GlobalStyle />
        <Toaster />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
