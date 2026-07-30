import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


function Cart(){

const navigate = useNavigate();

const {
cart,
removeFromCart,
increaseQty,
decreaseQty
}=useContext(CartContext);



const total = cart.reduce(
(acc,item)=>acc + item.price * item.quantity,
0
);



return(
<>
<Navbar/>


<div className="cart-container">


<h1>My Cart</h1>


{
cart.length===0 ?

<h2 className="empty-cart">
Your cart is empty
</h2>


:

<div className="cart-layout">


<div className="cart-items">


{
cart.map(item=>(


<div className="cart-card" key={item.id}>


<img 
src={item.image}
alt={item.name}
className="clickable-image"
onClick={()=>navigate(`/product/${item.id}`)}
/>


<div className="cart-details">

<h3>{item.name}</h3>

<p>{item.category}</p>


<h3 className="cart-price">
Rs.{item.price}
</h3>


<div className="qty-box">

<button
onClick={()=>decreaseQty(item.id)}
>
-
</button>


<span>
{item.quantity}
</span>


<button
onClick={()=>increaseQty(item.id)}
>
+
</button>


</div>


<button
className="remove"
onClick={()=>removeFromCart(item.id)}
>
Remove
</button>


</div>


</div>


))

}


</div>



<div className="summary">


<h2>
Order Summary
</h2>


<div className="summary-row">

<span>
Items
</span>

<span>
{cart.length}
</span>

</div>



<div className="summary-row">

<span>
Total
</span>

<span>
Rs.{total}
</span>

</div>



<button className="checkout">
Proceed To Checkout
</button>


</div>


</div>


}


</div>


<Footer/>

</>
)

}

export default Cart;