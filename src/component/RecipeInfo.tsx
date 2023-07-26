// interface recipeInfoArray {
//   recipeThumb: string;
//   ingredientThumb: string;
//   haveNum: number;
//   needNum: number;
//   canCook: boolean;
// }

const RecipeInfo = ({ recipeThumb, ingredientThumb, haveNum, needNum, canCook }) => {
  const resultTable = () => {
    const rowNum = ingredientThumb.length;
    const items = [
      <tr>
        <td rowSpan={String(rowNum)}>
          {recipeThumb /* <img src={thumbnail} alt="" width="80" /> */}
        </td>
        <td>{ingredientThumb[0]}</td>
        <td>
          {haveNum[0]}/{needNum[0]}
        </td>
        <td rowSpan={String(rowNum)}>{canCook}</td>
      </tr>
    ];
    for (let i = 1; i < ingredientThumb.length; i++) {
      items.push(
        <tr>
          <td>{ingredientThumb[i]}</td>
          <td>
            {haveNum[i]}/{needNum[i]}
          </td>
        </tr>
      );
    }
    return items;
  };

  return resultTable();
  // <tr>
  //   <td>{recipeThumb /* <img src={thumbnail} alt="" width="80" /> */}</td>
  //   <td>{ingredientThumb}</td>
  //   <td>
  //     {haveNum}/{needNum}
  //   </td>
  //   <td>{canCook}</td>
  // </tr>
};

export default RecipeInfo;
