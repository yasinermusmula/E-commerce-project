import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import ShopingCard from "./layout/ShopingCard";
import About from "./components/About";
import SignUpPage from "./components/SignUpPage";
import Login from "./components/LoginPage";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shoping" exact>
          <ShopingCard />
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
      </Switch>

      <ToastContainer />
    </>
  );
}

export default App;
