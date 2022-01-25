import React from "react";
import { useCart } from "../../hooks/useCart";
import { CartProductListItem } from "./CartProductListItem";

export const CartProductList = () => {
  const { cart, cartPrice } = useCart();
  console.log(cart);
  return (
    <div>
      <ul className="cart-product-list__list">
        {cart.map((product) => (
          <CartProductListItem key={product._id} {...product} />
        ))}

        <strong>Total: ${cartPrice.toFixed(2)}</strong>
      </ul>
    </div>
  );
};
