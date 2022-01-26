import React from "react";
import { CartProductList } from "../cart-product-list/CartProductList";

export const CartPage = () => {
  return (
    <div className="full-wrapper cart-page__wrapper">
      <h1>Cart</h1>
      <CartProductList />
    </div>
  );
};
