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
<<<<<<< HEAD
      <BrowserRouter>
        <GlobalStyle />
        <Toaster />
        <Routes />
      </BrowserRouter>
=======
      <HelmetProvider>
        <AnimatePresence>
          <BrowserRouter>
            <GlobalStyle />
            <Toaster />
            <Routes />
          </BrowserRouter>
        </AnimatePresence>
      </HelmetProvider>
>>>>>>> 0bfc8aad519ef16bfbc3450c0b133b9bee386dcb
    </Provider>
  );
}

export default App;
