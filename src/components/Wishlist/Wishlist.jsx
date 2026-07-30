import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Wishlist.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function Wishlist() {

const navigate = useNavigate();

const {
    wishlist,
    removeWishlist,
    addToCart
} = useContext(CartContext);


return (

<>

<Navbar/>


<div className="wishlist-container">

<h2>My Wishlist</h2>


{
wishlist.length === 0 ?

(
<div className="empty-wishlist">
<h3>Your Wishlist is Empty</h3>
<p>Add your favourite products here.</p>
</div>
)

:

(

<table className="wishlist-table">

<thead>
<tr>
<th>Product</th>
<th>Price</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>


<tbody>

{
wishlist.map((item)=>(

<tr key={item.id}>

<td className="product-column">

<img
src={item.image}
alt={item.name}
className="clickable-image"
onClick={()=>navigate(`/product/${item.id}`)}
/>

<span>{item.title}</span>

</td>


<td>
Rs.{item.price}
</td>


<td>
<span className="stock-status">
In Stock
</span>
</td>


<td className="action-column">

<button
className="cart-button"
onClick={()=>addToCart(item)}
>
Add To Cart
</button>


<button
className="remove-button"
onClick={()=>removeWishlist(item.id)}
>
Remove
</button>


</td>


</tr>

))

}

</tbody>

</table>

)

}


</div>


<Footer/>

</>

);
}


export default Wishlist;