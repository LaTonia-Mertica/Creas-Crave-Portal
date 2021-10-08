// import NavbarBackend from "./NavbarBackend";
import Sidebar from "./Sidebar";
// import Footer from "./Footer";

const Favorites = () => {
  return (
    <div style={{ backgroundColor: "#545454", marginTop: -44 }}>
      {/* <NavbarBackend /> */}
      <Sidebar type="cart" />
      {/* <Footer /> */}
    </div>
  );
};
export default Favorites;
