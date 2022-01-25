import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StarsDisplay } from "../star-display/StarsDisplay";
import { useCart } from "../../hooks/useCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByID } from "../../redux/slices/productsSlice";
import { LoadingScreen } from "../loadingScreen/LoadingScreen";

export const ProductDisplayPage = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading } = useSelector(
    (state) => state.productsSlice
  );
  const { add } = useCart();

  useEffect(() => {
    dispatch(fetchProductByID(productID));
    return () => {};
  }, [dispatch, productID]);

  const handleAddItemToCart = () => {
    add(selectedProduct);
  };
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className="full-wrapper product-display-page__wrapper">
      <strong className="product-display-page__card">
        <img
          className="product-display-page__card__image"
          src={"http://192.168.1.5:5000/" + selectedProduct.image}
          alt={selectedProduct.name}
        />

        <h1 className="product-display-page__card__title">
          {selectedProduct.name}
        </h1>
        <main>
          <h2 className="product-display-page__card__subtitle">
            Category: {selectedProduct.category}
          </h2>
          <h2 className="product-display-page__card__subtitle">
            Brand: {selectedProduct.brand}
          </h2>
          <span>
            <h2 className="product-display-page__card__subtitle">
              Description:
            </h2>
            {selectedProduct.description}
          </span>
          <h2 className="product-display-page__card__subtitle">
            Price: ${selectedProduct.price}
          </h2>
          <span>
            <h4>Rating: </h4>
            <StarsDisplay rating={selectedProduct.rating} />
          </span>
          <span>
            <h4>Number of Reviews: {selectedProduct.numReviews}</h4>
          </span>
        </main>

        {selectedProduct.countInStock === 0 ? (
          <button
            className="product-display-page__card__button btn-add-to-cart"
            disabled
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
      </strong>
    </div>
  );
};
