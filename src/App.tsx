import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Routes from "./shared/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
