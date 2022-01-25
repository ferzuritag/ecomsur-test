import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartPage } from "../components/pages/CartPage";
import { ProductListPage } from "../components/pages/ProductListPage";
import { ProductDisplayPage } from "../components/pages/ProductDisplayPage";
import { NavBar } from "../components/ui/NavBar";

export const MainRouter = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/cart" element={<CartPage />} />
          <Route
            exact
            path="/products/:productID"
            element={<ProductDisplayPage />}
          />
          <Route path="/products" element={<ProductListPage />} />
        </Routes>
      </Router>
    </div>
  );
};
