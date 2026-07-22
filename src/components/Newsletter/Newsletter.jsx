import "./Newsletter.css";

function Newsletter(){

  return(

    <section className="newsletter">

      <div className="newsletter-content">

        <h2>
          Get Fresh Deals & Updates
        </h2>

        <p>
          Subscribe to receive latest offers, organic tips and new product updates.
        </p>


        <div className="subscribe-box">

          <input 
            type="email"
            placeholder="Enter your email address"
          />

          <button>
            Subscribe
          </button>

        </div>


      </div>

    </section>

  );

}

export default Newsletter;