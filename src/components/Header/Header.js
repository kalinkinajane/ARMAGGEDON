import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__title">armaggedon v</h1>
        <p className="header__text">
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих
          к Земле.
        </p>
      </div>
      <nav className="header__navigation">
        <NavLink
          exact
          to="/"
          className="header__link"
          activeStyle={{
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Астероиды
        </NavLink>
        <NavLink
          to="/destruction"
          className="header__link"
          activeStyle={{
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Уничтожение
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
