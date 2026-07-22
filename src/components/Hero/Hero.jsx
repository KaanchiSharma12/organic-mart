import "./Hero.css";
import heroImage from "../../assets/images/grocery_shop_banner.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-badge">
          Fresh  |  Organic  |  Healthy
        </span>

        <h1>
          Eat Fresh,
          <br />
          Live Better.
        </h1>

        <p>
          Bring home farm-picked fruits, vegetables, dairy and bakery
          products with guaranteed freshness and premium quality.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Shop Now
          </button>

          <button className="secondary-btn">
            View Collection
          </button>
        </div>

        <div className="hero-stats">

          <div>
            <h3>5000+</h3>
            <p>Happy Customers</p>
          </div>

          <div>
            <h3>120+</h3>
            <p>Organic Products</p>
          </div>

          <div>
            <h3>4.9</h3>
            <p>Customer Rating</p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <img src={heroImage} alt="Organic Grocery" />

        <div className="offer-card">
          <h2>40% OFF</h2>
          <p>Organic Fruits</p>
        </div>

        <div className="delivery-card">
          <h3> Free Delivery</h3>
          <p>Above ₹499</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;