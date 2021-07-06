import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import Product from "../product/product";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Filters from "../filters/filters";

// hooks
import { useFetch } from "../../hooks/useFetch";
import { LoadingContext } from "../../contexts/LoadingContext";

function Products() {
  const [result, load, error] = useFetch(
    "http://localhost:3000/data/products.json"
  );
  const produtosData = useContext(ProductsContext);
  const contextLoading = useContext(LoadingContext);
  const { loading, setLoading } = contextLoading;

  const { produtos, setProdutos } = produtosData;
  useEffect(() => {
    setLoading({ ...loading, show: load });
    console.log(load);
    setProdutos({
      ...produtos,
      products: result ? result.products : [],
      filters: result ? result.filters : [],
    });
  }, [result, error, load]);
  return (
    <main className="main">
      <Breadcrumbs />
      <Filters />

      <section className="main__products products">
        <div id="produtosView">
          <div className="products__row">
            <ol className="products__list">
              {produtos.products.map((e) => (
                <Product
                  description={e.name}
                  price={e.price}
                  image={`${e.image}`}
                />
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
