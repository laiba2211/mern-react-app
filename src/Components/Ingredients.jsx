import React from "react";
import "./Ingredients.css";
import ingredientsImg from "../assets/Ingredients.jpeg"; // apni image yahan rakho

const Ingredients = () => {
  return (
    <section className="ingredients-section">

      <div className="ingredients-header">
        <p className="ingredients-subtitle">NATURE'S FINEST</p>
        <h2 className="ingredients-title">Premium Ingredients</h2>
        <p className="ingredients-description">
          Every ingredient is carefully selected for its nutritional profile and quality,
          creating a breakfast that fuels your body and mind.
        </p>
      </div>

      <div className="ingredients-container">

        {/* Left Image */}
        <div className="ingredients-image">
          <img src={ingredientsImg} alt="Ingredients" />
          <div className="badge">8+</div>
        </div>

        {/* Right Cards */}
        <div className="ingredients-grid">

          <div className="ingredient-card">
            <h2>Whole Green Oats</h2>
            <p>Sustained energy & fiber</p>
          </div>

          <div className="ingredient-card">
            <h2>Almonds</h2>
            <p>Healthy fats & Vitamin E</p>
          </div>

          <div className="ingredient-card">
            <h2>Cashews</h2>
            <p>Minerals & plant protein</p>
          </div>

          <div className="ingredient-card">
            <h2>Pistachios</h2>
            <p>Antioxidants & B6 vitamins</p>
          </div>

          <div className="ingredient-card">
            <h2>Pumpkin Seeds</h2>
            <p>Iron & magnesium boost</p>
          </div>

          <div className="ingredient-card">
            <h2>Chia Seeds</h2>
            <p>Omega-3 & sustained energy</p>
          </div>

          <div className="ingredient-card">
            <h2>Raisins</h2>
            <p>Natural sweetness & iron</p>
          </div>

          <div className="ingredient-card">
            <h2>Dates</h2>
            <p>Potassium & natural fiber</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Ingredients;