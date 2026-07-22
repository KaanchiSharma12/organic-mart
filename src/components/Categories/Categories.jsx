import "./Categories.css";

import bakery from "../../assets/images/bakery.png";
import coffee from "../../assets/images/coffee.png";
import vegetables from "../../assets/images/vegetables.png";
import fruit from "../../assets/images/fruit.png";
import milk from "../../assets/images/milk.png";
import rice from "../../assets/images/rice.png";

function Categories() {

  const categories = [

    {
      image: bakery,
      title: "Bakery",
      items: "25+ Products"
    },

    {
      image: coffee,
      title: "Coffee",
      items: "18+ Products"
    },

    {
      image: vegetables,
      title: "Vegetables",
      items: "45+ Products"
    },

    {
      image: fruit,
      title: "Fresh Fruits",
      items: "32+ Products"
    },

    {
      image: milk,
      title: "Dairy",
      items: "20+ Products"
    },

    {
      image: rice,
      title: "Rice & Grains",
      items: "16+ Products"
    }

  ];

  return (

    <section className="categories">

      <div className="section-title">

        <div>

          <span>SHOP BY CATEGORY</span>

          <h2>Featured Categories</h2>

        </div>

        <button>View All</button>

      </div>

      <div className="category-grid">

        {

          categories.map((item,index)=>(

            <div className="category-card" key={index}>

              <img src={item.image} alt={item.title}/>

              <h3>{item.title}</h3>

              <p>{item.items}</p>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default Categories;