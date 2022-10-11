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
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Marketplace />} />
      <Route path="/NftDetails" element={<NftDetails />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default Routers;