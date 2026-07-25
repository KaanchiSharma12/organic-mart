import "./ProductDetails.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import products from "../../data/products.json";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(item => item.id === Number(id));
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    if (!product) {
        return (
            <h2 style={{ textAlign: "center", margin: "80px" }}>
                Product Not Found
            </h2>
        );
    }

    const relatedProducts = products.filter(
        item => item.category === product.category && item.id !== product.id
    );
    const increase = () => setQuantity(quantity + 1);
    const decrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

return (
    <>
        <Navbar />

        {/* 1. Main Product Section */}
        <div className="product-details">
            <p className="breadcrumb">
                <span onClick={() => navigate("/")}>Home</span>
                {" / Products / "}
                {product.name}
            </p>

            <div className="details-container">

                <div className="left-section">
                    <div className="details-image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="product-info-box">
                        <div className="info-row">
                            <p><strong>SKU :</strong> ORG-{product.id}</p>
                            <p><strong>Category :</strong> {product.category}</p>
                            <p><strong>Status :</strong> <span className="stock">In Stock</span></p>
                        </div>
                    </div>

                    <div className="delivery-box">
                        <h3> Free Delivery</h3>
                        <p>Free delivery on orders above Rs.499.</p>
                    </div>
                </div>


                <div className="details-content">
                    <span className="category">{product.category}</span>
                    <h1>{product.name}</h1>
                    <p className="rating">{product.rating} Rating</p>

                    <div className="price">
                        <span>Rs.{product.price}</span>
                        <del>Rs.{product.oldPrice}</del>
                    </div>

                    <p className="weight-text">
                        <strong>Weight :</strong> 500 g
                    </p>

                    <div className="quantity-box">
                        <button onClick={decrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increase}>+</button>
                    </div>

                    <div className="action-buttons">
                        <button className="cart-btn">Add To Cart</button>
                        <button className="wish-btn">Wishlist</button>
                        <button className="share-btn">Share</button>
                    </div>
                </div>
            </div>

            <div className="bottom-description-section">
                <div className="tabs">
                    <button
                        className={activeTab === "description" ? "active" : ""}
                        onClick={() => setActiveTab("description")}
                    >
                        Description
                    </button>
                    <button
                        className={activeTab === "info" ? "active" : ""}
                        onClick={() => setActiveTab("info")}
                    >
                        Additional Info
                    </button>
                    <button
                        className={activeTab === "review" ? "active" : ""}
                        onClick={() => setActiveTab("review")}
                    >
                        Reviews
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === "description" && (
                        <p>
                            Fresh organic product sourced directly from trusted farms.
                            Rich in nutrients and free from harmful chemicals.
                        </p>
                    )}
                    {activeTab === "info" && (
                        <ul>
                            <li>Category : {product.category}</li>
                            <li>Weight : 500 g</li>
                            <li>Storage : Store in a cool and dry place.</li>
                        </ul>
                    )}
                    {activeTab === "review" && (
                        <div>
                            <h4>4.8 / 5</h4>
                            <p>Very fresh product. Packaging was excellent!</p>
                        </div>
                    )}
                </div>

                <button className="back-btn" onClick={() => navigate(-1)}>
                    ← Back
                </button>
            </div>
        </div>

        <div className="related-products-wrapper">
            <section className="related-products">
                <h2>Related Products</h2>
                <div className="related-grid">
                    {relatedProducts.map(item => (
                        <div
                            className="related-card"
                            key={item.id}
                            onClick={() => navigate(`/product/${item.id}`)}
                        >
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p className="category-label">{item.category}</p>
                            <div className="price">
                                <span>Rs.{item.price}</span>
                                <del>Rs.{item.oldPrice}</del>
                            </div>
                            <p className="card-rating"> {item.rating}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        <Footer />
    </>
);
}

export default ProductDetails;