import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductByID } from "../../helpers/products/getProductByID";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import { StarsDisplay } from "../star-display/StarsDisplay";
import { useCart } from "../../hooks/useCart";
export const ProductDisplayPage = () => {
  const { productID } = useParams();
  const { add } = useCart();
  const [product, setProduct] = useState({
    _id: "",
    name: "",
    description: "",
    image: "",
    brand: "",
    category: "",
    price: "",
    countInStock: "",
    rating: "",
    numReviews: "",
  });
  const {
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
  } = product;
  useEffect(() => {
    getProductByID(productID).then((product) => {
      setProduct(product);
    });

    return () => {};
  }, []);
  const handleAddItemToCart = () => {
    add(product);
  };
  return (
    <div className="full-wrapper product-display-page__wrapper">
      <div className="product-display-page__card">
        <img
          className="product-display-page__card__image"
          src={"http://192.168.1.5:5000/" + image}
        />

        <h1 className="product-display-page__card__title">{name}</h1>
        <main>
          <h2 className="product-display-page__card__subtitle">
            Category: {category}
          </h2>
          <h2 className="product-display-page__card__subtitle">
            Brand: {brand}
          </h2>
          <span>
            <h2 className="product-display-page__card__subtitle">
              Description:
            </h2>
            {description}
          </span>
          <h2 className="product-display-page__card__subtitle">
            Price: ${price}
          </h2>
          <span>
            <h4>Rating: </h4>
            <StarsDisplay rating={rating} />
          </span>
          <span>
            <h4>Number of Reviews: {numReviews}</h4>
          </span>
        </main>

        {countInStock === 0 ? (
          <button
            className="product-display-page__card__button btn-add-to-cart"
            disabled="true"
          >
            Out of Stock
          </button>
        ) : (
          <button
            className="product-display-page__card__button btn-add-to-cart"
            onClick={handleAddItemToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
