import React, { useEffect, useState } from "react";
import { getProducts } from "../../helpers/products/getProducts";
import { ProductList } from "../products-list/ProductList";

export const ProductListPage = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });

    return () => {};
  }, []);

  return (
    <div className="full-wrapper catalog-screen__wrapper">
      <h1>Products</h1>
      <ProductList productList={products} />
    </div>
  );
};
