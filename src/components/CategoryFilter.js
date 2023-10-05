import React, { useState } from "react";

function CategoryFilter({categories, chosenCategory, onSelectCategory}) {

  const categoryButtons = categories.map((category) => {
    const className = category === chosenCategory ? "selected": null ;
    return (
      <button
      className={className}
      onClick={() => onSelectCategory(category)}
      key={category}>{category}</button>
  )})


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
