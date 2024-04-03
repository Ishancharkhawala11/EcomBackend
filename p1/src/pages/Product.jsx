import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom"
import BreadCrum from "../components/BreadCrums/BreadCrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Description from "../components/DescriptionBox/Description";
import RelatedProduct from "../components/RelatedProduct/RelatedProduct";
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id===Number(productId))
  return( 
  <div>
       <BreadCrum  product={product}></BreadCrum>
       <ProductDisplay product={product}></ProductDisplay>
       <Description className="des"></Description>
       <RelatedProduct></RelatedProduct>
  </div>);
};

export default Product;