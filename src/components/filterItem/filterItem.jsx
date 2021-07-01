import FilterIcon from "../../assets/filter.svg";
import React from "react";

function FilterItem({ label }) {
  return (
    <li class="filters__item">
      <span class="filters__label">{label}</span>
      <img class="filters__img" src={FilterIcon} alt="" />
    </li>
  );
}

export default FilterItem;
