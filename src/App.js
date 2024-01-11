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
    setQuery(e?.target?.value);
  };

  const filterItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //------Radio Filter--------
  const handleChange = (event) => {
    setSelectedCategory(event?.target?.value);
  };

  //------- Buttons Filter -----
  const handleClick = (event) => {
    setSelectedCategory(event?.target?.value);
  };

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products products={products} />
    </>
  );
}

export default App;
