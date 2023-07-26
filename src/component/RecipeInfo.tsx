import { getIngredientThumb } from "../lib/RecipeList";

const RecipeInfo = ({ recipeThumb, ingredientThumb, haveNum, needNum, canCook }) => {
  const resultTable = () => {
    const rowNum = ingredientThumb.length;
    const items = [
      <tr>
        <td rowSpan={String(rowNum)}>{<img src={recipeThumb} alt="" />}</td>
        <td>{getIngredientThumb(ingredientThumb[0])}</td>
        <td>
          {haveNum[0]}/{needNum[0]}
        </td>
        <td rowSpan={String(rowNum)}>{canCook}</td>
      </tr>
    ];

    for (let i = 1; i < ingredientThumb.length; i++) {
      items.push(
        <tr>
          <td>{getIngredientThumb(ingredientThumb[i])}</td>
          <td>
            {haveNum[i]}/{needNum[i]}
          </td>
        </tr>
      );
    }
    return items;
  };

  return resultTable();
};

export default RecipeInfo;
