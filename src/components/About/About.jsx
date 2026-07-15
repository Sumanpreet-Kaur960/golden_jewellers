import "./About.css";
import aboutImg from "../../assets/about.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={aboutImg} alt="Golden Jewellers" />
      </div>

      <div className="about-content">
        <h2>About Golden Jewellers</h2>

        <p>
          At Golden Jewellers, we create timeless jewellery that blends
          elegance, craftsmanship, and trust. Every piece is designed to make
          your special moments unforgettable.
        </p>

        <button>Read More</button>
      </div>
    </section>
  );
}

export default About;