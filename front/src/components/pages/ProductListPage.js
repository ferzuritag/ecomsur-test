import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice";
import { LoadingScreen } from "../loading-screen/LoadingScreen";
import { ProductList } from "../products-list/ProductList";

export const ProductListPage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productsSlice);
  useEffect(() => {
    dispatch(fetchProducts());
    return () => {};
  }, [dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className="full-wrapper catalog-screen__wrapper">
      <h1>Products</h1>
      <ProductList productList={products} />
    </div>
  );
};
