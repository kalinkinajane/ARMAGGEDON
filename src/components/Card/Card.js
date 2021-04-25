import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import Dino from "../../image/dino.png";
import DinoMob from "../../image//dino-mob.png";
import renderAsteroid from "../../utils/renderAsteroid";
import changeTime from "../../utils/changeTime";

function Card({
  card,
  isclickMoon,
  isclickKm,
  onDestruction,
  onViewCard,
  size,
}) {
  function handelClick() {
    onDestruction(card);
  }
  function handelClickCard() {
    onViewCard(card);
    console.log("shd");
  }
  console.log(size.width);
  if (size.width > 600) {
    return (
      <div
        className={`card ${card.is_potentially_hazardous_asteroid ? "card-dangerous" : "card-not-dangerous"}`}
        onClick={handelClickCard}
      >
        <Link className="card__link" to="/about">
          <div className="card__image-conteiner">
            {renderAsteroid(card, size)}
            <img
              className="card__dinosaur"
              src={Dino}
              alt="Изображение динозавра"
            />
          </div>

          <div className="card__info-conteiner">
            <p className="card__name">{card.name.split("(")[1].slice(0, -1)}</p>
            <ul>
              <li className="card__text">
                <div>Дата</div>
                <div className="card__dashed"></div>
                <div>
                  {changeTime(card.close_approach_data[0].close_approach_date)}
                </div>
              </li>
              <li className="card__text">
                <div>Расстояние</div>
                <div className="card__dashed"></div>
                {isclickMoon && (
                  <div>
                    {Math.ceil(
                      card.close_approach_data[0].miss_distance.lunar
                    ).toLocaleString()}
                    <span> до луны</span>
                  </div>
                )}
                {isclickKm && (
                  <div>
                    {Math.ceil(
                      card.close_approach_data[0].miss_distance.kilometers
                    ).toLocaleString()}
                    <span> км</span>
                  </div>
                )}
              </li>
              <li className="card__text">
                <div>Размер</div>
                <div className="card__dashed"></div>
                <div>
                  {Math.ceil(
                    card.estimated_diameter.meters.estimated_diameter_max
                  )}
                  <span> м</span>
                </div>
              </li>
            </ul>
          </div>
        </Link>
        <div className="card__container-button">
          <div className="card__button-text">
            <p className="card__estimate">Оценка:</p>
            {card.is_potentially_hazardous_asteroid ? (
              <strong>опасен</strong>
            ) : (
              <strong>не опасен</strong>
            )}
          </div>
          <button onClick={handelClick} className="button">
            На уничтожение
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="mobile-card">
      <Link className="mobile-card__link" to="/about">
        <div
          className={`mobile-card__container ${card.is_potentially_hazardous_asteroid ? "card-dangerous" : "card-not-dangerous"}`}
          onClick={handelClickCard}
        >
          <div className="mobile-card__img">
            {renderAsteroid(card, size)}
            <p className="mobile__name card__name">
              {card.name.split("(")[1].slice(0, -1)}
            </p>
          </div>
          <img
            className="mobile-card__dino"
            src={DinoMob}
            alt="Изображение динозавра"
          />
        </div>
        <div className="card__info-conteiner mobile-card__info-conteiner">
          <ul>
            <li className="card__text">
              <div>Дата</div>
              <div className="card__dashed"></div>
              <div>
                {changeTime(card.close_approach_data[0].close_approach_date)}
              </div>
            </li>
            <li className="card__text">
              <div>Расстояние</div>
              <div className="card__dashed"></div>
              {isclickMoon && (
                <div>
                  {Math.ceil(
                    card.close_approach_data[0].miss_distance.lunar
                  ).toLocaleString()}
                  <span> до луны</span>
                </div>
              )}
              {isclickKm && (
                <div>
                  {Math.ceil(
                    card.close_approach_data[0].miss_distance.kilometers
                  ).toLocaleString()}
                  <span> км</span>
                </div>
              )}
            </li>
            <li className="card__text">
              <div>Размер</div>
              <div className="card__dashed"></div>
              <div>
                {Math.ceil(
                  card.estimated_diameter.meters.estimated_diameter_max
                )}
                <span> м</span>
              </div>
            </li>
          </ul>
        </div>
      </Link>
      <div className="mobile-card__container-button">
        <div className="card__button-text">
          <p className="card__estimate">Оценка:</p>
          {card.is_potentially_hazardous_asteroid ? (
            <strong>опасен</strong>
          ) : (
            <strong>не опасен</strong>
          )}
        </div>
        <button onClick={handelClick} className="button">
          На уничтожение
        </button>
      </div>
    </div>
  );
}

export default Card;
