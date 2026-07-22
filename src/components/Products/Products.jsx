import "./Products.css";

import apple from "../../assets/images/apple.png";
import tomato from "../../assets/images/tomato.png";
import milk from "../../assets/images/milk.png";
import rice from "../../assets/images/rice.png";
import honey from "../../assets/images/honey.png";
import coffee from "../../assets/images/coffee.png";
import bread from "../../assets/images/bread.png";
import orange from "../../assets/images/orange.png";


function Products(){

const products=[

{
image:apple,
name:"Fresh Apples",
category:"Fruits",
price:"RS. 180",
oldPrice:"Rs. 250",
rating:"4.8"
},

{
image:tomato,
name:"Organic Tomato",
category:"Vegetables",
price:"Rs. 60",
oldPrice:"Rs. 90",
rating:"4.7"
},

{
image:milk,
name:"Fresh Milk",
category:"Dairy",
price:"Rs. 55",
oldPrice:"Rs. 70",
rating:"4.9"
},

{
image:rice,
name:"Premium Rice",
category:"Grains",
price:"Rs. 320",
oldPrice:"Rs. 450",
rating:"4.6"
},

{
image:honey,
name:"Natural Honey",
category:"Organic",
price:"Rs. 280",
oldPrice:"Rs. 350",
rating:"4.8"
},

{
image:coffee,
name:"Organic Coffee",
category:"Beverages",
price:"Rs. 220",
oldPrice:"Rs. 300",
rating:"4.7"
},

{
image:bread,
name:"Brown Bread",
category:"Bakery",
price:"Rs. 45",
oldPrice:"Rs. 60",
rating:"4.5"
},

{
image:orange,
name:"Fresh Orange",
category:"Fruits",
price:"Rs. 120",
oldPrice:"Rs. 180",
rating:"4.8"
}

];


return(

<section className="products">


<div className="section-heading">

<div>

<span>OUR PRODUCTS</span>

<h2>Trending Products</h2>

</div>


<button>
View All
</button>


</div>



<div className="product-grid">


{

products.map((item,index)=>(


<div className="product-card" key={index}>


<div className="discount">

20% OFF

</div>


<div className="wishlist">




</div>


<img 
src={item.image}
alt={item.name}
/>


<p className="category">
{item.category}
</p>


<h3>
{item.name}
</h3>


<div className="rating">

 {item.rating}

</div>


<div className="price">

<span>
{item.price}
</span>

<del>
{item.oldPrice}
</del>


</div>



<button className="cart-btn">

Add To Cart

</button>



</div>


))

}


</div>


</section>

)

}


export default Products;