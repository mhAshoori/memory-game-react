import React from "react";
import "./SingleCard.css";
const index = ({ card, handleChoice, flipped, disabled }) => {
  // handle click
  const handleClick = () => {
    !disabled && handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default index;
