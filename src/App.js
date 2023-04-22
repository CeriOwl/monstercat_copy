import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="App">
      <Background/>
      <Header id="header" />
      <Main id="main" />
      <Footer id="footer" />
    </div>
  );
}
