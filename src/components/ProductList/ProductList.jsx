import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products, handleEdit, handleDelete }) => {
  return (
    <>
      <center style={{ fontSize: "30px", margin: "20px" }}>Products</center>
      <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        {products?.map((item) => {
          return (
            <ProductCard
              item={item}
              key={item.id}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
