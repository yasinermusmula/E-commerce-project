import Clients from "./layout/Clients";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Router } from "react-router-dom";
import ShopCar from "./layout/ShopCard";
import Product from "./components/Product";
import Content from "./components/Content";
import Features from "./layout/Features";
import Blog from "./layout/Blog";

function App() {
  return (
    <>
      <Header />
      <Clients />
      <ShopCar />
      <Product />
      <Content />
      <Features />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
