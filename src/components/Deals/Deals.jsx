import "./Deals.css";
import deals from "../../data/deals.json";


function Deals(){

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
deals.map((item)=>(

<div className="deal-card" key={item.id}>


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