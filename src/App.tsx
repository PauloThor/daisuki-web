import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Routes from "./shared/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
