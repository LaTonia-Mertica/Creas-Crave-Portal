// import NavbarBackend from "./NavbarBackend";
import Sidebar from "./Sidebar";
// import Footer from "./Footer";
import { useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// let allCustomers;
const Customers = ({ links }) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const [customers, setCustomers] = useState(null);
  const table = useRef(null);

  // if (!isAuthenticated) {
  //   loginWithRedirect();
  // }

  const addCustomer = async (event) => {
    event.preventDefault();

    let formData = {};

    for (const formField of event.target) {
      if (formField.id) {
        formData[formField.id] = formField.value;
      }
    }

    formData.zipCode = zipCode;

    if (formData.zipCode.length < 5) {
      alert("Dude - check your zip code, it's a little light on numbers.");
    } else if (formData.phoneNumber.length < 10) {
      alert("Seriously dude, add in on your phone number.");
    } else {
      const response = await fetch(`http://localhost:3001/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          email: localStorage.email,
          password: localStorage.password,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
      } else {
        setCustomers(data.customers);
        table.current.scrollIntoView();

        for (const formField of event.target) {
          formField.value = "";
        }
      }
    }
  };

  return (
    <div
      className="container-fluid"
      style={{ marginTop: 67, backgroundColor: "#545454" }}
    >
      {/* <NavbarBackend /> */}
      <div>
        <Sidebar type="cart" />
      </div>
      <div className="row" style={{ marginLeft: 425 }}>
        <div>
          <form onSubmit={addCustomer}>
            <div className="row" style={{ marginTop: -425 }}>
              <div className="col-5">
                <label
                  htmlFor="firstName"
                  className="form-label"
                  style={{ marginTop: -50 }}
                ></label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  required
                  tabIndex="1"
                  placeholder="first name"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
              </div>

              <div className="col-5">
                <label
                  htmlFor="lastName"
                  className="form-label"
                  style={{ marginTop: -50 }}
                ></label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  required
                  tabIndex="2"
                  placeholder="last name"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-10">
                <div>
                  <label
                    htmlFor="address1"
                    className="form-label"
                    style={{ marginTop: -150 }}
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="address1"
                    required
                    tabIndex="3"
                    placeholder="address1"
                    value={address1}
                    onChange={(event) => {
                      setAddress1(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-10">
                <div>
                  <label
                    htmlFor="address2"
                    className="form-label"
                    style={{ marginTop: -150 }}
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    tabIndex="4"
                    placeholder="address2"
                    value={address2}
                    onChange={(event) => {
                      setAddress2(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-5">
                <div>
                  <label
                    htmlFor="city"
                    className="form-label"
                    style={{ marginTop: -150 }}
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    required
                    tabIndex="5"
                    placeholder="city"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="col-2">
                <div>
                  <label
                    htmlFor="state"
                    className="form-label"
                    style={{ marginTop: -150 }}
                  ></label>
                  <select
                    className="form-select"
                    defaultValue="NY"
                    id="state"
                    required
                    tabIndex="6"
                    placeholder="state"
                    value={state}
                    onChange={(event) => {
                      setState(event.target.value);
                    }}
                  >
                    <option></option>
                    <option>AL</option>
                    <option>AK</option>
                    <option>AZ</option>
                    <option>AR</option>
                    <option>CA</option>
                    <option>CO</option>
                    <option>CT</option>
                    <option>DE</option>
                    <option>FL</option>
                    <option>GA</option>
                    <option>HI</option>
                    <option>ID</option>
                    <option>IL</option>
                    <option>IN</option>
                    <option>IA</option>
                    <option>KS</option>
                    <option>KY</option>
                    <option>LA</option>
                    <option>ME</option>
                    <option>MD</option>
                    <option>MA</option>
                    <option>MI</option>
                    <option>MN</option>
                    <option>MS</option>
                    <option>MO</option>
                    <option>MT</option>
                    <option>NE</option>
                    <option>NV</option>
                    <option>NH</option>
                    <option>NJ</option>
                    <option>NM</option>
                    <option>NY</option>
                    <option>NC</option>
                    <option>ND</option>
                    <option>OH</option>
                    <option>OK</option>
                    <option>OR</option>
                    <option>PA</option>
                    <option>RI</option>
                    <option>SC</option>
                    <option>SD</option>
                    <option>TN</option>
                    <option>TX</option>
                    <option>UT</option>
                    <option>VT</option>
                    <option>VA</option>
                    <option>WA</option>
                    <option>WV</option>
                    <option>WI</option>
                    <option>WY</option>
                  </select>
                </div>
              </div>

              <div className="col-3">
                <div>
                  <label
                    htmlFor="zipCode"
                    className="form-label"
                    style={{ marginTop: -150 }}
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    required
                    tabIndex="7"
                    placeholder="zip code"
                    value={zipCode}
                    onChange={(event) => {
                      setZipCode(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="form-label"
                  style={{ marginTop: -150, width: 250 }}
                ></label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  required
                  tabIndex="8"
                  placeholder="phone number"
                  onBlur={(event) => {
                    const num = event.target.value.trim();
                    if (num.length === 10) {
                      event.target.value = `(${num.substring(
                        0,
                        3
                      )}) ${num.substring(3, 6)}-${num.substring(6)}`;
                    }
                  }}
                  value={phoneNumber}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="col">
              <div>
                <label
                  htmlFor="emailAddress"
                  className="form-label"
                  style={{ marginTop: -150 }}
                ></label>
                <input
                  type="text"
                  className="form-control"
                  id="emailAddress"
                  required
                  tabIndex="9"
                  placeholder="email address"
                  value={emailAddress}
                  onChange={(event) => {
                    setEmailAddress(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col text-center">
                <button
                  type="submit"
                  value="submit"
                  title="DISABLED"
                  // onclick="submitForm()"
                  className="btn btn-primary"
                  style={{
                    fontSize: 21,
                    fontWeight: 700,
                    marginTop: -67,
                    marginLeft: 400,
                    marginRight: 150,
                    marginBottom: 137,
                    paddingTop: 17,
                    paddingBottom: 17,
                    paddingLeft: 37,
                    paddingRight: 37,
                    letterSpacing: 1,
                    backgroundColor: "#5ce1e6",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  UPDATE/CREATE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Customers;
