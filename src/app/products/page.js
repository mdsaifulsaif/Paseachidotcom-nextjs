import React from "react";
import dbconnection from "../Lib/mongodb";
// import dbconnection from "../Lib/mongodb";

async function Products() {
  const data = await dbconnection("products");
  const products = await data.find({}).toArray();
  console.log(products);
  return <div>product</div>;
}

export default Products;
