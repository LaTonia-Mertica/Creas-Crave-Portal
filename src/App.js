import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./Cart";
import Creatives from "./Creatives";
import CreativesInCart from "./CreativesInCart";
import Customers from "./Customers";
import Disclaimer from "./Disclaimer";
import Favorites from "./Favorites";
import Footer from "./Footer";
import Login from "./Login";
import NavbarBackend from "./NavbarBackend";
import Purchases from "./Purchases";
import Sidebar from "./Sidebar";
import Users from "./Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/creatives">
            <Creatives />
          </Route>

          <Route path="/creativesincart">
            <CreativesInCart />
          </Route>

          <Route path="/customers">
            <Customers />
          </Route>

          <Route path="/disclaimer">
            <Disclaimer />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="/footer">
            <Footer />
          </Route>

          <Route path="/navbarbackend">
            <NavbarBackend />
          </Route>

          <Route path="/purchases">
            <Purchases />
          </Route>

          <Route path="/sidebar">
            <Sidebar
              links={[
                "purchase history",
                "favorite creatives",
                "items in cart",
                "delete account",
                "logout",
              ]}
            />
          </Route>

          <Route path="/sidebarcreatives">
            <Sidebar
              links={[
                "customers",
                "purchases",
                "favorites",
                "abandoned carts",
                "logout",
              ]}
            />
          </Route>

          <Route path="/sidebarpurchases">
            <Sidebar
              links={[
                "customers",
                "creatives sold",
                "sales amounts",
                "sold dates",
                "logout",
              ]}
            />
          </Route>

          {/* <Route path="/sidebar">
            <Sidebar
              links={[
                "customers",
                "purchases",
                "favorites",
                "abandoned carts",
                "creatives sold",
                "sales amounts",
                "sold dates",
                "purchase history",
                "favorite creatives",
                "items in cart",
                "delete account",
                "logout",
              ]}
            />
          </Route> */}

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
