import "./Categories.css";
import categories from "../../data/categories.json";

function Categories() {

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

        {categories.map((item) => (

          <div className="category-card" key={item.id}>

            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

            <p>{item.items}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Categories;