import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/Products/Products";
import Deals from "../../components/Deals/Deals";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

import "./Home.css";


function Home(){

return(

<div className="home-page">

<Navbar />

<Hero />

<Categories />

<Products />

<Deals />

<Newsletter />

<Footer />

</div>

)

}


export default Home;