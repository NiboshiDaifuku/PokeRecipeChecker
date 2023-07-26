import { useState } from "react";
import { getIngredientThumb } from "../lib/RecipeList";

const CountIngredient = ({ name, count }) => {
  const [num, setNum] = useState(Number(count));
  const count1Up = () => {
    setNum(num + 1);
  };
  const count5Up = () => {
    setNum(num + 5);
  };
  const count1Down = () => {
    if (num - 1 >= 0) {
      setNum(num - 1);
    }
  };
  const count5Down = () => {
    if (num - 5 >= 0) {
      setNum(num - 5);
    } else {
      setNum(0);
    }
  };
  return (
    <div>
      {getIngredientThumb(name)}
      {num}
      <button onClick={count1Up}>+1</button>
      <button onClick={count1Down}>-1</button>
      <button onClick={count5Up}>+5</button>
      <button onClick={count5Down}>-5</button>
    </div>
  );
};

export default CountIngredient;
