import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/Popular";
import Offers from "../components/offers/Offers";
import NewCollection from "../components/newCollection/NewCollection";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollection></NewCollection>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Shop;
