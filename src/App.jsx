import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/index";
import RTipos from "./components/Tipos";
import Login from "../server/Login"
import Register from "../server/Register";
import Redes from "./components/Home";
import Arquitectura from "./components/Arquitectura";
import Proyecto from "./components/Proyecto";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tipos" element={<RTipos/>}/>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Redes" element={<Redes/>}/>
          <Route path="/Arquitectura" element={<Arquitectura/>}/>
          <Route path="/Proyecto" element={<Proyecto/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;



















































































