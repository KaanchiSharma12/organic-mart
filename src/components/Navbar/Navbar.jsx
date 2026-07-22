import "./Navbar.css";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/green_leaf_logo.png";
import search from "../../assets/icons/search.png";
import heart from "../../assets/icons/heart.png";
import cart from "../../assets/icons/cart.png";

function Navbar() {
const navigate = useNavigate();


const user = JSON.parse(
localStorage.getItem("currentUser")
);

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

        <div className="logo">

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

          <button>

            <img src={search} alt="search" />

          </button>

        </div>

        <div className="nav-icons">

          <div className="icon-box">

            <img src={heart} alt="wishlist" />

          </div>

          <div className="icon-box cart">

            <img src={cart} alt="cart" />

            <span>2</span>

          </div>

{

user ?

<div className="user-area">

<span>
Hi, {user.name}
</span>

<button
className="login-btn"
onClick={()=>{

localStorage.removeItem("currentUser");
localStorage.removeItem("isLoggedIn");

window.location.reload();

}}
>

Logout

</button>


</div>


:

<button
className="login-btn"
onClick={()=>navigate("/login")}
>

Login

</button>

}

        </div>

      </nav>

      <div className="menu">

        <a href="/">Home</a>

        <a href="/">Shop</a>

        <a href="/">Categories</a>

        <a href="/">Deals</a>

        <a href="/">About</a>

        <a href="/">Contact</a>

      </div>
    </>
  );
}

export default Navbar;