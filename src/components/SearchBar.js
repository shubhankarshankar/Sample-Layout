import React from "react";

const SearchBar = props => {
  return (
    <div className="search-wrapper" data-aos="fade-left">
      {props.children}
    </div>
  );
};

export default SearchBar;
