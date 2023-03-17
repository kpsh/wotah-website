import React from "react";
import { Navbar } from "./components/Navbar";
import { Cart } from "./routes/Cart";
import { Contact } from "./routes/Contact";
import { Faq } from "./routes/Faq";
import { Home } from "./routes/Home";
import { Products } from "./routes/Products";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
};
