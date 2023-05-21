import React from "react";
import { DataTable } from "../Component/DataTable";
import Product from "../Database/Product";
import { NavigationBar } from "../Component/NavigationBar";

export const ProductPage = () => {
  const columns = [
    "Product Name",
    "Description",
    "Product Price",
    "Category",
    "Expiry Date",
    "ACTION",
  ];
  return (
    <div>
      <NavigationBar/>
      <h1>Products</h1>
      <button>Add New Product</button>
      <DataTable columns={columns} items={Product} />
    </div>
  );
};

export default ProductPage;
