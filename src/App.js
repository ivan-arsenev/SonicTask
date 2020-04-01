import React from "react";
import SideBar from "./components/SideBar/SideBar";
import Nav from "./components/NavBar/Nav";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Nav />
      <SideBar />
    </div>
  );
}

export default App;
