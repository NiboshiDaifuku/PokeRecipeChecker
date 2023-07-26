import { useState } from "react";

const InputIngredients = ({ ingredientsInfos, setIngredientsInfos }) => {
  const applyIngredients = () => {};

  return (
    <div className="input-text-box">
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <input type="number" name="example" min="0" max="100" value="0" />
      <p>
        <button onClick={applyIngredients}>材料を反映する</button>　
      </p>
    </div>
  );
};

export default InputIngredients;
