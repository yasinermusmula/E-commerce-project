
import HomePage from "./components/HomePage";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import ShopingCard from "./layout/ShopingCard";
import About from "./components/About";

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
      </Switch>
    </>
  );
}

export default App;
