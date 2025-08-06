import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { CartContext } from "./Context";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const { cart } = useContext<any>(CartContext);

  const pathItems = [
    {
      id: "home",
      path: "/",
      label: "Home",
    },
    {
      id: "cart",
      path: "/cart",
      label: "Cart",
    },
  ];

  return (
    <div>
      <h2 className="title">React Context API</h2>
      <ul className={`nav`}>
        {pathItems.map((item) => {
          const isActive = path === item.path;
          return (
            <li key={item.id}>
              <Link to={item.path} className={`${isActive ? "active" : ""}`}>
                {item.label}{" "}
                {item.id === "cart" && cart.length > 0
                  ? `(${cart.length})`
                  : ""}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
