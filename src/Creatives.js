import NavbarBackend from "./NavbarBackend";
import Sidebar from "./Sidebar";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";

const Creatives = () => {
  return (
    <div
      className="container-fluid"
      style={{ marginTop: -44, backgroundColor: "#545454" }}
    >
      <NavbarBackend />

      <Sidebar type="creatives" className="col-4" />
      <div className="row">
        <div className="col-8" style={{ marginBottom: 22 }}></div>
      </div>

      <Disclaimer />
      <Footer />
    </div>
  );
};
export default Creatives;