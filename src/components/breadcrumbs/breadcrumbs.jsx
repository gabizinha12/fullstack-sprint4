import React, { Fragment, useContext } from "react";
import BreadcrumbItem from "../breadcrumbItem/breadcrumItem";
import { CategoriasContext } from "../../contexts/CategoriasContext";
const breadcrumbItems = ["Home", "Infatil", "Personagens", "Mario Bros"];

function Breadcrumbs() {
  const breadcrumbsMenu = useContext(CategoriasContext);
  console.log(breadcrumbsMenu);
  return (
    <section className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          {breadcrumbsMenu.categorias.current.map((breadcrumb, index, arr) => {
            if (index === arr.length - 1) {
              return <BreadcrumbItem key={index} value={breadcrumb.name} />;
            }
            return (
              <Fragment>
                <BreadcrumbItem key={index} value={breadcrumb.name} />
                <li className="breadcrumbs__item  breadcrumbs__separator">/</li>
              </Fragment>
            );
          })}
        </ol>
      </nav>
    </section>
  );
}

export default Breadcrumbs;
