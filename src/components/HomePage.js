import React from "react";
import Blog from "../layout/Blog";
import Clients from "../layout/Clients";
import Features from "../layout/Features";
import Product from "../layout/Product";
import Content from "./Content";
import ShopCard from "../layout/ShopCard";
import { Switch, Route } from "react-router-dom";
import ShopingCard from "../layout/ShopingCard";
import Header from "./Header";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Clients />
      <ShopCard />
      <Product />
      <Content />
      <Features />
      <Blog />
      <Footer />
    </>
  );
}
