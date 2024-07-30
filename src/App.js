import React from "react";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Service from "./components/Service/Service";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Home />
      <Main />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
