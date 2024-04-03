import React, { useState } from 'react';
import "./Addproduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImg] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    catgory: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImg(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value
    });
  };

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData(); // Corrected typo
    formData.append('product', image);
    await fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
      responseData = data;
      console.log(responseData);
      if (responseData.success) {
        product.image = responseData.image_url;
        console.log(product);
        fetch("http://localhost:8000/addproduct",{
          method:"POST",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          body:JSON.stringify(product)
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.success) {
            alert("Product added successfully");
          } else {
            alert("Failed to add product");
          }
        });
      } else {
        alert("Failed to upload image");
      }
    });
  };
  

  return (
    <div className='AddProduct'>
      <div className='itemfield'>
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' name="name" placeholder='Type Here' />
      </div>
      <div className='price'>
        <div className='itemfield'>
          <p>Price</p>
          <input type='text' name='old_price' value={productDetails.old_price} onChange={changeHandler} placeholder='Type Here'></input>
        </div>
        <div className='itemfield'>
          <p>Offer Price</p>
          <input type='text' name='new_price' value={productDetails.new_price} onChange={changeHandler} placeholder='Type Here'></input>
        </div>
      </div>
      <div className='itemfield'>
        <p>Product Category</p>
        <select value={productDetails.catgory} onChange={changeHandler} name='catgory' className='selector'>
          <option value="women">women</option>
          <option value="men">men</option>
          <option value="kids">kids</option>
        </select>
      </div>
      <div className='itemfield'>
        <label htmlFor='file-input'>
          <img src={image ? URL.createObjectURL(image) : upload_area} className='thumnail-img' alt="upload"></img>
          <input type='file' onChange={imageHandler} name='image' id='file-input' hidden></input>
        </label>
      </div>
      <button onClick={() => { addProduct() }} className='btn'>ADD</button>
    </div>
  );
}

export default AddProduct;
