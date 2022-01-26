import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export const NavBar = () => {
  const { itemCount } = useCart();
  const [toggleMenu, setToggle] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {};
  }, []);
  return (
    <header className="navbar__wrapper">
      <h1 className="title">Store</h1>
      {(toggleMenu || windowSize >= 600) && (
        <nav>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                Cart(
                {itemCount <= 10 ? itemCount : "+10"})
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="navbar__burguer-menu-btn">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            setToggle(!toggleMenu);
          }}
        />
      </div>
    </header>
  );
};
