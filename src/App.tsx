import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyle } from "./styles/global";
import Provider from "./hooks";
import Toaster from "./components/Toaster";
import Routes from "./shared/routes";

function App() {
  return (
    <Provider>
      <HelmetProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Toaster />
          <Routes />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
