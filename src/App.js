import { useState } from "react";

import Navigation from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";

import products from "./db/data";

function App() {
  const [selectCategory, setSelectedCategory] = useState(null);

  //----Input Filter -------
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    console.log(e?.target?.value);
    setQuery(e?.target?.value);
  };

  //------Input Filter-------
  const filterItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //------Radio Filter--------
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event?.target?.value);
  };

  //------- Buttons Filter -----
  const handleClick = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event?.target?.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filterItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ color, category, newPrice, company, title }) =>
          color === selected ||
          category === selected ||
          newPrice === selected ||
          company === selected ||
          title === selected
      );
    }
    return filteredProducts;
  }

  const finalProducts = filteredData(products, selectCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products products={finalProducts} />
    </>
  );
}

export default App;
