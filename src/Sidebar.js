import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = ({ type }) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  let links = [];
  if (type === "cart") {
    links = [
      { label: "purchase history", destination: "/purchaseHistory" },
      { label: "favorite creatives", destination: "/favoriteCreatives" },
      { label: "items in cart", destination: "/itemsInCart" },
      { label: "delete account", destination: "/deleteAccount" },
      { label: "logout", destination: "/logout" },
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
            minWidth: "18%",
            maxWidth: "20%",
            textAlign: "center",
          }}
        >
          <ul
            className="list-group"
            style={{
              paddingTop: 62,
              paddingBottom: -200,
              textAlign: "left",
            }}
          >
            {links.map((link) => {
              return (
                <>
                  <li
                    className="list-group-item"
                    style={{
                      backgroundColor: "#c8c4bd",
                      padding: 37,
                      // color: "#808080",
                      color: `links.indexOf(li) < [0] ? "#808080" : "black"`,
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
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
