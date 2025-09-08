import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getCartTotalAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          home
        </Link>
        <a
          className={menu === "menu" ? "active" : ""}
          href="#explore-menu"
          onClick={() => setMenu("menu")}
        >
          menu
        </a>
        <a
          className={menu === "mobile-app" ? "active" : ""}
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
        >
          mobile-app
        </a>
        <a
          className={menu === "contact us" ? "active" : ""}
          href="#footer"
          onClick={() => setMenu("contact us")}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} />
          </Link>
          <div className={getCartTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
