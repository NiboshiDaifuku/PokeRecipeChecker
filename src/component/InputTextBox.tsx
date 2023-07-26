import { useState } from "react";
import { getRecipeInfo } from "../lib/ParserLib";

const InputTextBox = ({ recipeInfos, setRecipeInfos }) => {
  const [inputText, setText] = useState("");

  const startParse = () => {
    if (inputText !== "") {
      const tmpRecipeInfoArray = getRecipeInfo(inputText);
      setRecipeInfos(tmpRecipeInfoArray);
    }
  };

  return (
    <div className="input-text-box">
      <textarea cols="50" rows="5" onChange={(e) => setText(e.currentTarget.value)} />
      <p>
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
      </p>
      <p>
        <button onClick={startParse}>反映</button>　
      </p>
    </div>
  );
};

export default InputTextBox;
