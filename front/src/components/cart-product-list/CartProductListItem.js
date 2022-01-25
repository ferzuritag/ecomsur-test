import {
  faMinusCircle,
  faPlus,
  faPlusCircle,
  faSearchMinus,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCart } from "../../hooks/useCart";

export const CartProductListItem = ({
  _id,
  name,
  image,
  price,
  countInStock,
  amount,
}) => {
  const { add, remove } = useCart();
  const handleAddItemToCart = () => {
    add({ _id, name, image, price });
  };
  const handleRemoveItemOfCart = () => {
    remove(_id);
  };
  return (
    <li className="cart-product-list__list__item " id={_id}>
      <img
        className="cart-product-list__list__image"
        src={"http://192.168.1.5:5000" + image}
      />
      <span>
        <h1 className="cart-product-list__list__title">{name}</h1>
        <h2 className="cart-product-list__list__price">Price: ${price}</h2>
        <span className="cart-product-list__list__amount-wrapper">
          <button
            className="cart-product-list__list__amount-wrapper__button"
            onClick={handleRemoveItemOfCart}
          >
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
          <h3>Amount: {amount}</h3>
          <button
            className="cart-product-list__list__amount-wrapper__button"
            onClick={handleAddItemToCart}
          >
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        </span>
      </span>
    </li>
  );
};
