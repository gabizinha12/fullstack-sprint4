import React from "react";

// icons
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import LogoResposiveIcon from "../../assets/rchlo.svg";
import LogoIcon from "../../assets/riachuelo.svg";
import SearchIcon from "../../assets/search.svg";

// components
import "./Header.css";
import Menu from "../menu/menu";

function Header() {
  return (
    <header class="header">
      <div class="header__container">
        <div class="header__mobile">
          <div class="header__drawer menu header__drawer--active">
            <img class="menu__img" src={MenuIcon} alt="open menu" />
            <p class="menu__title">menu</p>
          </div>
          <div class="header__drawer close">
            <img src={CloseIcon} alt="close menu" />
            <p class="close__title">fechar</p>
          </div>
          <h1 class="header__logo">
            <img class="header__img" src={LogoResposiveIcon} alt="RCHLO" />
          </h1>
        </div>
        <div class="header__desktop">
          <h1 class="header__logo">
            <img class="header__img" src={LogoIcon} alt="Riachuelo" />
          </h1>
        </div>
        <div class="header__search">
          <img class="header__icon" src={SearchIcon} alt="Buscar" />
          <input
            class="header__input"
            type="search"
            placeholder="O que você está procurando?"
          />
        </div>

        <Menu />
      </div>
    </header>
  );
}

export default Header;
