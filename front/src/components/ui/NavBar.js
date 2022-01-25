import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export const NavBar = () => {
  const { itemCount, cartPrice } = useCart();
  return (
    <header className="navbar__wrapper">
      <h1 className="title">Store</h1>
      <nav className="">
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart({itemCount}) ${cartPrice}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
