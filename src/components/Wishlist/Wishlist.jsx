import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Wishlist.css";
import wishlistItems from "../../data/wishlist.json";

function Wishlist() {

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