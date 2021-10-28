import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Sidebar = ({ type }) => {
  // const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
  const { isAuthenticated, logout } = useAuth0();

  let links = [];
  if (type === "cart") {
    links = [
      { label: "purchase history", destination: "/purchasehistory" },
      { label: "favorite creatives", destination: "/favoritecreatives" },
      { label: "creatives in cart", destination: "/creativesincart" },
      { label: "delete account", destination: "/deleteaccount" },
      { label: "logout", destination: "./Login" },
    ];
  } else if (type === "creatives") {
    links = [
      { label: "customers", destination: "/customers" },
      { label: "purchases", destination: "/purchases" },
      { label: "favorites", destination: "/favorites" },
      { label: "abandoned carts", destination: "/abandonedCarts" },
      { label: "logout", destination: "/logout" },
    ];
  } else if (type === "purchases") {
    links = [
      { label: "customers", destination: "/customers" },
      { label: "creatives sold", destination: "/creativesSold" },
      { label: "sales amount", destination: "/salesAmount" },
      { label: "sold dates", destination: "/soldDates" },
      { label: "logout", destination: "/logout" },
    ];
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col"
          style={{
            fontSize: "small",
            minWidth: "20%",
            maxWidth: "20%",
            // textAlign: "center",
          }}
        >
          <ul
            className="list-group"
            style={{
              paddingTop: 62,
              paddingLeft: 64,
              paddingBottom: -200,
              // textAlign: "left",
            }}
          >
            {links.map((link) => {
              return (
                <Link to={link.destination} style={{ textDecoration: "none" }}>
                  <li
                    className="list-group-item"
                    style={{
                      backgroundColor: "#c8c4bd",
                      padding: 44,
                    }}
                    href={link.destination}
                    onClick={() => {
                      if (link.label === "logout") {
                        logout();
                        console.log(isAuthenticated);
                      }
                    }}
                    // style={{'backgroundColor': hours2.indexOf(item) > -1 ? 'yellow' : 'pink'}}
                  >
                    {link.label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
