import React, { useContext } from "react";

import MenuItem from "./menuItem/menuItem";

import { CategoriasContext } from "../../contexts/CategoriasContext";

function Menu() {
  const contextCategoria = useContext(CategoriasContext);
  const { categorias } = contextCategoria;

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        {categorias.all.map((el) => (
          <MenuItem key={el.id} label={el.label} link={el.link} />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
