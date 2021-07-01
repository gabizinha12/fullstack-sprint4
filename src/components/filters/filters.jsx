import FilterItem from "../filterItem/filterItem";
import React from "react";

const data = {
  filters: [
    {
      id: "size",
      label: "Tamanho",
    },
    {
      id: "color",
      label: "Cor",
    },
    {
      id: "department",
      label: "Departamento",
    },
    {
      id: "category",
      label: "Categoria",
    },
    {
      id: "sleeve",
      label: "Manga",
    },
  ],
};

function Filters() {
  return (
    <section class="main__filters filters">
      <ul class="filters__list">
        {data.filters.map((filter) => (
          <FilterItem label={filter.label} />
        ))}
      </ul>
    </section>
  );
}

export default Filters;
