import Router from "./Routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
    width: 100%;
    height: 100vh;
  }

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
