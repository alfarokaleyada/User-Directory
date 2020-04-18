import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/wapper/Wrapper";
import Header from "./components/Header";

import "./App.css";


// fun for app
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
