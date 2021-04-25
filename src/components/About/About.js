import React from "react";
import "./About.css";
import Dino from "../../image/dino.png";
import renderAsteroid from "../../utils/renderAsteroid";
import changeTime from "../../utils/changeTime";

function About({ viewCard, onDestruction, size }) {
  console.log(viewCard);
  function handelClick() {
    onDestruction(viewCard);
  }
  return (
    <div className="about">
      <div
        className={`card about__card ${
          viewCard.is_potentially_hazardous_asteroid
            ? "card-dangerous"
            : "card-not-dangerous"
        }`}
      >
        <div className="card__image-conteiner card__image-conteiner-about">
          {renderAsteroid(viewCard, size)}
          <img
            className="card__dinosaur"
            src={Dino}
            alt="Изображение динозавра"
          />
        </div>
        <div className="card__info-conteiner about__info-conteiner">
          <p className="card__name">
            {viewCard.name.split("(")[1].slice(0, -1)}
          </p>
          <ul>
            <li className="about__text card__text">
              <div>Дата</div>
              <div className="card__dashed"></div>
              <div>
                {changeTime(
                  viewCard.close_approach_data[0].close_approach_date
                )}
              </div>
            </li>
            <li className="about__text card__text">
              <div>Расстояние</div>
              <div className="card__dashed"></div>
              <div>
                {Math.ceil(
                  viewCard.close_approach_data[0].miss_distance.kilometers
                ).toLocaleString()}
                <span> км</span>
              </div>
            </li>
            <li className="about__text card__text">
              <div>Размер</div>
              <div className="card__dashed"></div>
              <div>
                {Math.ceil(
                  viewCard.estimated_diameter.meters.estimated_diameter_max
                )}
                <span> м</span>
              </div>
            </li>
            <li className="about__text card__text">
              <div>Скорость относительно Земли</div>
              <div className="card__dashed"></div>
              <div>
                {Math.ceil(
                  viewCard.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                ).toLocaleString()}
                <span> км в час</span>
              </div>
            </li>
            <li className="about__text card__text">
              <div>Летит по орбите</div>
              <div className="card__dashed"></div>
              <div>{viewCard.close_approach_data[0].orbiting_body}</div>
            </li>
            <li className="about__text card__text">
              <div>Время максимального сближения</div>
              <div className="card__dashed"></div>
              <div>
                {viewCard.close_approach_data[0].close_approach_date_full}
              </div>
            </li>
          </ul>
        </div>
        <div className="about-card__container-button card__container-button">
          <div className="card__button-text">
            <p className="card__estimate">Оценка:</p>
            {viewCard.is_potentially_hazardous_asteroid ? (
              <strong>опасен</strong>
            ) : (
              <strong>не опасен</strong>
            )}
          </div>
          <button onClick={handelClick} className="button about__button">
            На уничтожение
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
