import React, { useContext } from "react";
import "./CSS/ShopCatagory.css";
import { ShopContext } from "../context/ShopContext";
import dropDown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/item/Item";

const ShopCatagory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-catgory">
      <img className="bannner" src={props.banner} alt="Banner"></img>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropDown_icon} alt="Dropdown Icon"></img>
        </div>
     </div>
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            if (props.catgory === item.catgory) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  className="item"
                ></Item>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shop-category-loadmore">
          Explore-More
        </div>
      </div>

  );
};

export default ShopCatagory;
