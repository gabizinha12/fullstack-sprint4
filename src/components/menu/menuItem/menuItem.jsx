import React from "react";

function MenuItem({ label, link }) {
  return (
    <li class="menu__item">
      <a class="menu__link" href={link}>
        <span>{label}</span>
      </a>
    </li>
  );
}

export default MenuItem;
