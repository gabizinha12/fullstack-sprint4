import React, { useContext } from "react";
import { CategoriasContext } from "../../contexts/CategoriasContext";
import MenuItem from "./menuItem/menuItem";

function Menu() {
  const categorias = useContext(CategoriasContext);
  return (
    <nav class="header__menu menu">
      <ul class="menu__list">
        {categorias.categorias.all.map((el) => (
          <MenuItem key={el.id} label={el.label} link={el.link} />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
