import BreadcrumbItem from "../breadcrumbItem/breadcrumItem";
import React from "react";

const breadcrumbItems = ["Home", "Infatil", "Personagens", "Mario Bros"];

function Breadcrumbs() {
  return (
    <section className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          {breadcrumbItems.map((breadcrumb, index, arr) => {
            if (index === arr.length - 1) {
              return <BreadcrumbItem key={index} value={breadcrumb} />;
            }

            return (
              <div>
                <BreadcrumbItem key={index} value={breadcrumb} />
                <li className="breadcrumbs__item  breadcrumbs__separator">/</li>
              </div>
            );
          })}
        </ol>
      </nav>
    </section>
  );
}

export default Breadcrumbs;
