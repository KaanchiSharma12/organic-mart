import "./Products.css";
import products from "../../data/products.json";


function Products(){

return (

<section className="products">

<div className="product-grid">

{
products.map((product)=>(

<div className="product-card" key={product.id}>

<img 
src={product.image} 
alt={product.name}
/>

<h3>{product.name}</h3>

<p>{product.category}</p>


<div className="price">

<span>Rs.{product.price}</span>

<del>
Rs.{product.oldPrice}
</del>

</div>


<p className="rating">
 {product.rating}
</p>


<button>
Add to Cart
</button>


</div>

))

}

</div>

</section>

)

}

export default Products;