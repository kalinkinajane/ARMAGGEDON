import React from "react";
import "./Destruction.css";
import Dino from "../../image/dino.png";
import renderAsteroid from "../../utils/renderAsteroid";
import changeTime from "../../utils/changeTime";
import DinoMob from "../../image//dino-mob.png";

function Destruction({ size, cards, onClean }) {
  return (
    <div className="destruction">
      {cards.map((card) => (
        <div
          key={card.name}
          className={`card ${card.is_potentially_hazardous_asteroid ? "card-dangerous" : "card-not-dangerous"}`}
        >
          <div className="card__image-conteiner destruction__conteiner">
            {renderAsteroid(card, size)}
            {size.width > 600 ? (
              <img
                className="card__dinosaur"
                src={Dino}
                alt="Изображение динозавра"
              />
            ) : (
              <img
                className="destruction__dino"
                src={DinoMob}
                alt="Изображение динозавра"
              />
            )}
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

                <div>
                  {Math.ceil(
                    card.close_approach_data[0].miss_distance.kilometers
                  ).toLocaleString()}
                  <span> км</span>
                </div>
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
          <div className="card__container-button">
            <div className="card__button-text">
              <p className="card__estimate">Оценка:</p>
              {card.is_potentially_hazardous_asteroid ? (
                <strong>опасен</strong>
              ) : (
                <strong>не опасен</strong>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="destruction__container">
        <p className="destruction__text">
          Заказать бригаду им. Брюса Уиллиса на выбранные астероиды. Бригада
          будет доставлена на астероиды в нужный момент и выполнит работу по
          уничтожению выбранных астероидов.
        </p>
         
        <button onClick={onClean} className="button destruction__button">
          Заказать бригаду
        </button>
      </div>
    </div>
  );
}
export default Destruction;
