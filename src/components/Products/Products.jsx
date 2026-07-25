import "./Products.css";
import products from "../../data/products.json";
import { useNavigate } from "react-router-dom"; // 1. Router hook import kiya

function Products() {
    const navigate = useNavigate(); // 2. Navigate function initialize kiya

    return (
        <section className="products">
            <div className="product-grid">
                {products.map((product) => (
                    <div 
                        className="product-card" 
                        key={product.id}
                        onClick={() => navigate(`/product/${product.id}`)} // 3. Click handler add kar diya
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
                                e.stopPropagation(); // Prevents opening product details when clicking "Add to Cart"
                                alert(`${product.name} added to cart!`);
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;