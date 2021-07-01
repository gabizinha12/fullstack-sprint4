import FilterItem from "../filterItem/filterItem";
import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

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
  const filterData = useContext(ProductsContext);
  const { produtos } = filterData;
  return (
    <section class="main__filters filters">
      <ul class="filters__list">
        {produtos.filters.map((filter) => (
          <FilterItem label={filter.label} />
        ))}
      </ul>
    </section>
  );
}

export default Filters;
