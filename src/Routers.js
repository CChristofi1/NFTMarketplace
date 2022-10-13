import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Marketplace from "../pages/Market";
import NftDetails from "../pages/NftDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Marketplace" element={<Marketplace />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default Routers;
