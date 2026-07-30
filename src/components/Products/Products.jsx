import "./Products.css";
import products from "../../data/products.json";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Products() {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    return (
        <section className="products">
            <div className="product-grid">
                {products.map((product) => (
                    <div
                        className="product-card"
                        key={product.id}
                        onClick={() => navigate(`/product/${product.id}`)}
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                        />

                        <h3>{product.name}</h3>
                        <p>{product.category}</p>

                        <div className="price">
                            <span>Rs.{product.price}</span>
                            <del>Rs.{product.oldPrice}</del>
                        </div>

                        <p className="rating">
                            {product.rating}
                        </p>
                        <button

                            onClick={(e) => {

                                e.stopPropagation();

                                addToCart(product);

                            }}

                        >
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;