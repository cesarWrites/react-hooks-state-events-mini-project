import React, { useState } from "react";

function CategoryFilter({categories, onFilter}) {
  const [isSelected, setIsSelected] = useState(null);
  function handleChange(){
    setIsSelected(index);
    onFilter(category);
  }
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return <button  key={index} onClick={handleChange}  className={isSelected === index ? "selected" : null}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;