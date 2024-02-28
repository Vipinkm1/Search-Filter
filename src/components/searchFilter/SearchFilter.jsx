import React, { useState } from "react";
import "./SearchFilter.css";
import Data from "../../data.json";

const SearchFilter = () => {
  const [SearchProduct, setSearchProduct] = useState("");

  return (
    <>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search Product"
          onChange={(e) => {
            setSearchProduct(e.target.value);
          }}
        />
      </div>
      <div className="product-item">
        {Data.filter((val) => {
          if (SearchProduct == "") {
            return val;
          } else if (
            val.category.toLowerCase().includes(SearchProduct.toLowerCase())
          ) {
            return val;
          }
        }).map((val) => {
          return (
            <div className="product-list" key={val.id}>
              <h2>{val.category}</h2>
              <img src={val.image} />

              <p>{val.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchFilter;
