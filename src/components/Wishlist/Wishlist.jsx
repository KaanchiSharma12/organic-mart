import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Wishlist.css";

// Importing real images from your assets
import appleImg from "../../assets/images/apple.png";
import potatoImg from "../../assets/images/potato.png";
import pineappleImg from "../../assets/images/pineapple.png";
import avocadoImg from "../../assets/images/avocado.png";

function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      name: "Fresh Organic Apple",
      unit: "2 Pc",
      price: "Rs. 40.00",
      status: "In Stock",
      img: appleImg,
    },
    {
      id: 2,
      name: "Organic Potato",
      unit: "1 kg",
      price: "Rs. 30.00",
      status: "In Stock",
      img: potatoImg,
    },
    {
      id: 3,
      name: "Golden Pineapple",
      unit: "1 Pc",
      price: "Rs. 90.00",
      status: "Out of Stock",
      img: pineappleImg,
    },
    {
      id: 4,
      name: "Fresh Avocado",
      unit: "500g",
      price: "Rs. 180.00",
      status: "In Stock",
      img: avocadoImg,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="wishlist-container">
        <div className="breadcrumb">Home / Shop / My Wishlist</div>
        <h1 className="wishlist-title">My Wishlist</h1>
        <p className="wishlist-subtitle">
          There are {wishlistItems.length} products in this wishlist.
        </p>

        <div className="wishlist-table-wrapper">
          <table className="wishlist-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Product</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td className="product-cell">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="wishlist-product-img"
                    />
                    <div>
                      <div className="product-name">{item.name}</div>
                      <div className="product-unit">{item.unit}</div>
                    </div>
                  </td>
                  <td className="product-price">{item.price}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        item.status === "In Stock" ? "in-stock" : "out-stock"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className={`action-btn ${
                        item.status === "In Stock" ? "btn-add" : "btn-contact"
                      }`}
                    >
                      {item.status === "In Stock" ? "Add to cart" : "Contact us"}
                    </button>
                  </td>
                  <td className="remove-icon">🗑️</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;