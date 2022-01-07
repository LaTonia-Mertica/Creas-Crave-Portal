import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Cart from "./Cart";
// import Creatives from "./Creatives";
// import CreateAccount from "./CreateAccount";
import CreativesInCart from "./CreativesInCart";
import Customers from "./Customers";
import DeleteAccount from "./DeleteAccount";
import Disclaimer from "./Disclaimer";
import Favorites from "./Favorites";
import Footer from "./Footer";
// import PageBlank from "./PageBlank";
import Login from "./Login";
// import NavbarBackend from "./NavbarBackend";
import Navbar from "./Navbar";
import PurchaseHistory from "./PurchaseHistory";
import Sidebar from "./Sidebar";
import { useWindowWidth } from "@react-hook/window-size";
import lmDevLogo from "./images/lmDevLogo.png";

// import Subscribers from "./Subscribers";
// import Users from "./Users";

function App() {
  const width = useWindowWidth();

  if (width < 1300) {
    return (
      <div className="increaseScreen">
        <h1>more space please</h1>
        <h2>
          current screen size is smaller
          <br />
          than the screen size needed.
          <br />
          please expand the window.
          <br />
          or use larger device/screen.
        </h2>
        <img src={lmDevLogo} />
      </div>
    );
  }
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          {/* <Route path="/cart">
            <Cart />
          </Route> */}

          {/* <Route path="/createaccount">
            <CreateAccount />
          </Route> */}

          {/* <Route path="/creatives">
            <Creatives />
          </Route> */}

          <Route path="/deleteaccount">
            <DeleteAccount />
          </Route>

          <Route path="/creativesincart">
            <CreativesInCart />
          </Route>

          <Route path="/customers">
            <Customers />
          </Route>

          {/* <Route path="/disclaimer">
            <Disclaimer />
          </Route> */}

          <Route path="/favoritecreatives">
            <Favorites />
          </Route>

          {/* <Route path="/footer">
            <Footer />
          </Route> */}

          {/* <Route path="/navbarbackend">
            <NavbarBackend />
          </Route> */}

          {/* <Route path="/pageblank">
            <PageBlank />
          </Route> */}

          <Route path="/purchasehistory">
            <PurchaseHistory />
          </Route>

          <Route path="/sidebar">
            <Sidebar
            // links={[
            //   "purchase history",
            //   "favorite creatives",
            //   "items in cart",
            //   "delete account",
            //   "logout",
            // ]}
            />
          </Route>

          {/* <Route path="/sidebarcreatives">
            <Sidebar
            links={[
              "customers",
              "purchases",
              "favorites",
              "abandoned carts",
              "logout",
            ]}
            />
          </Route> */}

          {/* <Route path="/sidebarpurchases">
            <Sidebar
            links={[
              "customers",
              "creatives sold",
              "sales amounts",
              "sold dates",
              "logout",
              ,
            ]}
            />
          </Route> */}

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

          {/* <Route path="/subscribers">
            <Subscribers />
          </Route> */}

          {/* <Route path="/users">
            <Users />
          </Route> */}

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
      <Disclaimer />
      <Footer />
    </div>
  );
}

export default App;
