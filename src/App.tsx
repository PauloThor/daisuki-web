import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./styles/global";
import Provider from "./hooks";
import Toaster from "./components/Toaster";
import Routes from "./shared/routes";

function App() {
  return (
    <Provider>
      <HelmetProvider>
        <AnimatePresence>
          <BrowserRouter>
            <GlobalStyle />
            <Toaster />
            <Routes />
          </BrowserRouter>
        </AnimatePresence>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
