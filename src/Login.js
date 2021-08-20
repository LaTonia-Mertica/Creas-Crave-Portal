import Navbar from "./Navbar";
import { Link, useHistory } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

function Login() {
  const [favorites, setFavorites] = useState();
  const [idToken, setIdToken] = useState();
  const [accessToken, setAccessToken] = useState();

  // const Login = () => {
  const history = useHistory();
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    getIdTokenClaims,
    getAccessTokenSilently,
  } = useAuth0();

  // const accessToken = getAccessTokenSilently();

  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then((data) => setIdToken(data.__raw));
      getAccessTokenSilently().then((token) => setAccessToken(token));
    }
  }, [isAuthenticated]);

  useEffect(async () => {
    if (accessToken) {
      const data = await axios
        .get("http://localhost:3000/favorites", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => response.data.favorites);
      setFavorites(data);
    }
  }, [accessToken]);

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
          <h1>ID TOKEN</h1>
          <p>{JSON.stringify(idToken)}</p>

          <h1>ACCESS TOKEN</h1>
          <p>{JSON.stringify(accessToken)}</p>

          <img src={user["picture"]} alt="visual of user" />
          <button onClick={(event) => logout()}>LOGOUT</button>
          {/* 
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
            </form> */}
        </div>
      </div>
      <Footer />
    </div>
  );
  // };
}
export default Login;
