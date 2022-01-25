import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { StarsDisplay } from "../star-display/StarsDisplay";

export const ProductListItem = ({
  _id,
  name,
  description,
  image,
  brand,
  category,
  price,
  countInStock,
  rating,
  numReviews,
}) => {
  const { add } = useCart();
  const handleAddItemToCart = () => {
    add({
      _id,
      name,
      description,
      image,
      brand,
      category,
      price,
      countInStock,
      rating,
      numReviews,
    });
  };
  return (
    <li className="product_list__item">
      <img
        className="product_list__item__img"
        src={"http://192.168.1.5:5000/" + image}
        alt={name}
      />
      <main>
        <h2 className="product_list__item__brand-category">{`${brand}-${category}`}</h2>
        <Link to={`/products/${_id}`}>
          <h1 className="product_list__item__title">{name}</h1>
        </Link>
        <p className="product_list__item__description">{description}</p>
        <h2>${price}</h2>
        <span>
          <StarsDisplay rating={rating} />
          <h4>Stock: {countInStock}</h4>
        </span>
      </main>

      {countInStock === 0 ? (
        <button
          className="product_list__item__add-btn btn-add-to-cart"
          disabled
        >
          Out of Stock
        </button>
      ) : (
        <button
          className="product_list__item__add-btn btn-add-to-cart"
          onClick={handleAddItemToCart}
        >
          Add to Cart
        </button>
      )}
    </li>
  );
};
