import React, { useState } from "react";
import "./Main.css";
import Card from "../Card/Card";

function renderCards(
  cards,
  isDanger,
  isclickMoon,
  isclickKm,
  onDestruction,
  onViewCard,
  size
) {
  if (isDanger) {
    return cards
      .filter((card) => card.is_potentially_hazardous_asteroid === true)
      .map((card) => (
        <Card
          size={size}
          card={card}
          key={card.id}
          isclickMoon={isclickMoon}
          isclickKm={isclickKm}
          onDestruction={onDestruction}
          onViewCard={onViewCard}
        />
      ));
  }
  return cards.map((card) => (
    <Card
      card={card}
      size={size}
      key={card.id}
      isclickMoon={isclickMoon}
      isclickKm={isclickKm}
      onDestruction={onDestruction}
      onViewCard={onViewCard}
    />
  ));
}
function Main({ size, cards, onDestruction, onViewCard }) {
  const [isclickMoon, setIsclickMoon] = useState(false);
  const [isclickKm, setIsclickKm] = useState(true);
  const [isDanger, setIsDanger] = useState(false);

  function handleClickMoon() {
    setIsclickMoon(true);
    setIsclickKm(false);
  }
  function handleClickKm() {
    setIsclickKm(true);
    setIsclickMoon(false);
  }
  const handleCheckbox = ({ target: { checked } }) => {
    setIsDanger(checked);
  };
  return (
    <div className="main">
      <div className="main__container">
        <label>
          <input
            className="main__chechbox"
            checked={isDanger}
            onChange={handleCheckbox}
            type="checkbox"
            name="box"
          />
          <span className="lable">Показать только опасные</span>
        </label>
        <p className="main__text">
          Расстояние{" "}
          <span
            onClick={handleClickKm}
            className={`text ${isclickKm ? "active" : ""}`}
          >
            в километрах
          </span>
          ,{" "}
          <span
            onClick={handleClickMoon}
            className={`text ${isclickMoon ? "active" : ""}`}
          >
            в дистанциях до луны
          </span>
        </p>
      </div>
      <div className="card__container">
        {renderCards(
          cards,
          isDanger,
          isclickMoon,
          isclickKm,
          onDestruction,
          onViewCard,
          size
        )}
      </div>
    </div>
  );
}

export default Main;
