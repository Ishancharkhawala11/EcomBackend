import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import remove_icon  from '../../assets/cross_icon.png'
const ListProduct = () => {
  const [allProduct, setALlProduct] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:8000/displayall")
      .then((res) => res.json())
      .then((data) => {
        setALlProduct(data);
        
      });
  };
  useEffect(()=>
  {
    fetchInfo()
  }, []);
  const removeProduct=async(id)=>
  {
     await fetch("http://localhost:8000/removeproduct",{
      method:"POST",
      headers:{
            Accept:"application/json",
            "Content-type":"application/json",
      },
      body:JSON.stringify({id:id})
     })
     await fetchInfo()
}
  return (
    <div className="ListProduct">
      <h1>All product List</h1>
      <div className="formet_main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      
      </div>
      <div className="allProduct">
        <hr></hr>
        {
          allProduct.map((product,index)=>
          {
            return(
            <> <div key={index} className="formet_main formet">
                   <img className="product_icon"
                   src={product.image}></img>
                   <p>{product.name}</p>
                   <p>{product.old_price}</p>
                   <p>{product.new_price}</p>
                   <p>{product.catgory}</p>
                   <img onClick={()=>{removeProduct(product.id)}} 
                   src={remove_icon} className="remove_icon"></img>
              </div>
              <hr></hr></> 
            )
          })
        }
      </div>
    </div>
  );
};

export default ListProduct;
