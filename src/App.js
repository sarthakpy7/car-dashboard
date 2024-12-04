import React from "react";
import Carousel from "./components/Carousel";
import PriceCalculator from "./components/PriceCalculator";
import CarOverview from "./components/CarOverview";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <h2>Book A Car</h2>
        </div>
        <nav>
          <ul>
            <li>Buy Car</li>
            <li>Sell Car</li>
            <li>Account</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="carousel-section">
          <Carousel />
        </section>
        <section className="details-section">
          <CarOverview />
        </section>
        <section className="calculator-section">
          <PriceCalculator />
        </section>
      </main>
    </div>
  );
}

export default App;
