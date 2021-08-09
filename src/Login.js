import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  return (
    <div id="mainLoginReturnDiv" style={{ marginTop: -44 }}>
      <Navbar />
      <div className="container-fluid" style={{ marginBottom: 87 }}>
        <div className="row">
          <form>
            <div id="emailPwRow" style={{ marginTop: 187 }}>
              <label htmlFor="inputEmail" className="col-5 form-label">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="enter email"
                />
              </label>

              <label htmlFor="inputpassword" className="col-5 form-label">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="enter password"
                />
              </label>
            </div>

            <div>
              <p id="createAccount">
                <a href="/createaccount" id="createNewAccount">
                  create new account
                </a>
              </p>
            </div>

            <Link to="/customers" style={{ textDecoration: "none" }}>
              <button type="submit" className="btn btn-dark center">
                LOGIN
              </button>
            </Link>

            <div>
              <p style={{ textAlign: "center" }}>
                <span>
                  <a href="/" id="resets">
                    reset username
                  </a>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <a href="/" id="resets">
                    reset password
                  </a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
