import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";

import logo from "../../assets/images/green_leaf_logo.png";
import heart from "../../assets/icons/heart.png";
import cart from "../../assets/icons/cart.png";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <div className="topbar">
        <p>Free Shipping on Orders Above ₹499</p>

        <div className="topbar-right">
          <a href="/">Help</a>
          <a href="/">Track Order</a>
          <a href="/">Support</a>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img src={logo} alt="logo" />
          <div>
            <h2>OrganicMart</h2>
            <span>Fresh Every Day</span>
          </div>
        </div>

        <div className="search-area">
          <input
            type="text"
            placeholder="Search organic products..."
          />
          <button type="button" className="search-btn">
            {/* Inline SVG Search Icon - Zero Image Issue, 100% Crisp */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        <div className="nav-icons">
          {/* Wishlist Icon */}
          <div className="icon-box" onClick={() => navigate("/wishlist")} title="Wishlist">
            <img src={heart} alt="wishlist" />
          </div>

          {/* Cart Icon */}
          <div className="icon-box cart" title="Cart">
            <img src={cart} alt="cart" />
            <span className="cart-badge">2</span>
          </div>

          {user ? (
            <div className="user-area">
              <span>Hi, {user.name}</span>
              <button
                className="login-btn"
                onClick={() => {
                  localStorage.removeItem("currentUser");
                  localStorage.removeItem("isLoggedIn");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </div>
      </nav>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/">Shop</Link>
        <Link to="/">Categories</Link>
        <Link to="/">Deals</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/">Contact</Link>
      </div>
    </>
  );
}

export default Navbar;