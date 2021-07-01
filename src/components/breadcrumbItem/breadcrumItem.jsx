import React from "react";

function BreadcrumbItem({ value }) {
  return (
    <li class="breadcrumbs__item breadcrumbs__item--active">
      <span class="breadcrumbs__link">{value}</span>
    </li>
  );
}

export default BreadcrumbItem;
