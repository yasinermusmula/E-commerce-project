import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import ShopingCard from "./layout/ShopingCard";
import About from "./components/About";
import SignUpPage from "./components/SignUpPage";
import Login from "./components/LoginPage";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userVerify } from "./store/actions/userAction";
import { fetchCategories } from "./store/actions/globalActions";
import { fetchProducts } from "./store/actions/productAction";
import axios from "axios";
import ProductDetailPage from "./layout/ProductDetailPage";
import OrderSummaryPage from "./components/OrderSummaryPage";

function App() {
  const categoryListData = useSelector((store) => store.global.categories);
  const productListData = useSelector((store) => store.product.productList);
  console.log("Product app", productListData);
  console.log("Category app", categoryListData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    if (localStorage.getItem("token")) {
      dispatch(userVerify());
    }
  }, []);

  for (let i = 0; i < categoryListData.length; i++) {
    console.log(categoryListData[i]);
  }
  //
  // useEffect(() => {
  //   for (let i = 0; i < categoryListData.length; i++) {
  //     axios
  //       .post("http://localhost:8082/api/category/", categoryListData[i])
  //       .then((res) => {
  //         console.log("Post succes", res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [categoryListData]);
  //
  // useEffect(() => {
  //   const postData = async () => {
  //     try {
  //       for (let i = 0; i < productListData.length; i++) {
  //         const res = await axios.post(
  //           "http://localhost:8082/api/product/",
  //           productListData[i],
  //         );
  //         console.log("Post products", res.data);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //
  //   postData();
  // }, [productListData]);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shoping/:gender?/:categoryName?/:catId?" exact>
          <ShopingCard />
        </Route>
        <Route path="/productDetail/:category?/:productId?/:productNameSlug?">
          <ProductDetailPage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route>
          <OrderSummaryPage path="/ordersummary" />
        </Route>
      </Switch>

      <ToastContainer />
    </>
  );
}

export default App;
