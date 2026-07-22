import "./Deals.css";

import fruit from "../../assets/images/fruit.png";
import vegetables from "../../assets/images/vegetables.png";
import milk from "../../assets/images/milk.png";


function Deals(){

const deals=[

{
image:fruit,
title:"Fresh Fruits Combo",
desc:"Apple + Orange + Banana",
price:"₹299",
old:"₹450",
discount:"35% OFF"
},

{
image:vegetables,
title:"Organic Vegetable Pack",
desc:"Fresh Farm Vegetables",
price:"₹199",
old:"₹300",
discount:"30% OFF"
},

{
image:milk,
title:"Fresh Dairy Pack",
desc:"Milk + Dairy Products",
price:"₹399",
old:"₹550",
discount:"25% OFF"
}

];


return(

<section className="deals">


<div className="deal-heading">

<div>

<span>LIMITED TIME OFFER</span>

<h2>Today's Deals</h2>

</div>


<button>
View All
</button>


</div>



<div className="deal-grid">


{
deals.map((item,index)=>(

<div className="deal-card" key={index}>


<div className="deal-discount">

{item.discount}

</div>


<img 
src={item.image}
alt={item.title}
/>


<div className="deal-content">


<h3>
{item.title}
</h3>


<p>
{item.desc}
</p>


<div className="deal-price">

<strong>
{item.price}
</strong>

<del>
{item.old}
</del>

</div>


<button>
Grab Deal
</button>


</div>


</div>


))

}


</div>


</section>

)

}


export default Deals;