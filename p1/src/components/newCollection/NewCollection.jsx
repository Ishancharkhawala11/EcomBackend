import React, { useEffect, useState } from "react";
import "./newcollection.css";
// import new_collection from "../assets/new_collections";
import Item from "../item/Item";
const NewCollection = () => {
  const [new_collection,setColl]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/newcollection").then((res)=>res.json()).then((data)=>setColl(data))
  },[])
  return (
    <div className="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr></hr>
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
