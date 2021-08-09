// import shoppingCartImg from "./images/shoppingCart.png";
// import headShoulder from "./images/headShoulder.png";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bglmccsblue">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href={{ NavBar }}> */}
            <a
              className="navbar-brand"
              href={"https://latoniamertica.dev/Creas-Crave-Capstone/"}
            >
              CREAS CRAVE
            </a>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse navbar-left"
              id="navbarSupportedContent"
            > */}
            {/* <div className="row" style={{ marginTop: 10, marginRight: 20 }}> */}
            {/* <div className="col">
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="get creative"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-light"
                      type="button"
                      id="searchSubmitBtn"
                    >
                      search
                    </button>
                  </form>
                </div> */}
            {/* <div className="col-1" style={{ marginRight: 20 }}>
                  <img
                    className="img-responsive"
                    style={{ height: 37 }}
                    src={shoppingCartImg}
                    alt="Shopping Cart"
                    id="shopCart"
                  />
                </div> */}

            {/* <div className="col-1">
                  <img
                    className="img-responsive"
                    style={{
                      height: 34,
                      filter: "invert()",
                      marginTop: 3,
                      paddingRight: 410,
                    }}
                    src={headShoulder}
                    alt="Head and Shoulders"
                    id="headShoulder"
                  />
                </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
