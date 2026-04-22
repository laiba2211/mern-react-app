import React from "react";
import "./Hero.css";

import heroBg from "../assets/Fitnashta banner Img.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          
          <p className="hero-subtitle">
            PREMIUM BREAKFAST ENERGY BOOSTER
          </p>

          <h1 className="hero-title">
            FIT<span>NASHTA</span>
          </h1>
       <p className="quote">by Eatoreum</p>
          <p className="hero-description">
            A powerful blend of whole green oats, almonds, cashews,
            pistachios, pumpkin seeds, chia seeds, raisins & dates —
            boiled in milk for the ultimate nutritious morning ritual.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">DISCOVER FITNASHTA</button>
            <button className="btn-secondary">VIEW INGREDIENTS</button>
          </div>

        </div>
      </div>
    </section>
  );
};
<div className="hero-overlay">
  <div className="hero-content">
    {/* content here */}
  </div>

  {/* Golden Line */}
  <div className="hero-divider"></div>
</div>
export default Hero;