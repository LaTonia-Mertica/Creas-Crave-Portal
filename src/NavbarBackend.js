// import { Link } from "react-router-dom";

const NavbarBackend = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bglmccsblue">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href={{ NavbarBackend }}> */}
            <a
              className="navbar-brand"
              href={"https://latoniamertica.dev/Creas-Crave-Capstone/"}
            >
              CREAS CRAVE
            </a>
            <div className="dropdown">
              <button
                className="btn btn-link
                dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "white", textDecoration: "none" }}
              >
                username
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">
                  shop
                </button>
                <button className="dropdown-item" type="button">
                  settings
                </button>
                <button className="dropdown-item" type="button">
                  logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavbarBackend;
