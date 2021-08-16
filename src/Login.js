import Navbar from "./Navbar";
import { Link, useHistory } from "react-router-dom";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const history = useHistory();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <p>Processing your request ...</p>;
  }

  console.log(isLoading, isAuthenticated);
  if (!isAuthenticated) {
    loginWithRedirect();
  } else {
    history.push("/customers");
  }

  return (
    <div id="mainLoginReturnDiv" style={{ marginTop: -44 }}>
      <Navbar />
      <div className="container-fluid" style={{ marginBottom: 87 }}>
        <div className="row">
          {/* image and logout for auth0 */}
          {/* <img src={user["picture"]} alt="visual of user" />
          <button onClick={(event) => logout()}>LOGOUT</button> */}

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
