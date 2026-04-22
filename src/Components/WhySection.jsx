import React from "react";
import "./WhySection.css";
import { FaBolt, FaShieldAlt, FaClock, FaStar } from "react-icons/fa";
const WhySection = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        <p className="why-subtitle">WHY FITNASHTA</p>

        <h2 className="why-title">Fuel Your Morning</h2>

        <p className="why-description">
          Designed for health-conscious individuals who refuse to compromise on
          taste or nutrition.
        </p>

        <div className="features">

          <div className="feature-box">
            <div className="icon-box">
              <FaBolt />
            </div>
            <h3>Sustained Energy</h3>
            <p>
              Complex carbs from oats and natural sugars from dates provide
              long-lasting energy throughout your morning.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-box">
              <FaShieldAlt />
            </div>
            <h3>Immune Support</h3>
            <p>
              Packed with antioxidants, vitamins, and minerals from nuts and
              seeds to keep your defenses strong.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-box">
              <FaClock />
            </div>
            <h3>Ready in Minutes</h3>
            <p>
              Simply boil in milk for a quick, nutritious breakfast — no
              complicated recipes or prep needed.
            </p>
          </div>

          <div className="feature-box">
            <div className="icon-box">
              <FaStar/>
            </div>
            <h3>100% Natural</h3>
            <p>
              No preservatives, artificial flavors, or added sugars. Just pure,
              wholesome nutrition in every spoon.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySection;