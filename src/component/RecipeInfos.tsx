import RecipeInfo from "./RecipeInfo";

const RecipeInfos = (recipeObj) => {
  let info = [];
  if (recipeObj !== null) {
    const obj = recipeObj["recipeObj"];
    Object.keys(obj).forEach((key) => {
      for (let i = 0; i < obj[key].length; i++) {
        info.push(
          <RecipeInfo
            key={obj[key][i].recipeThumb}
            recipeThumb={obj[key][i].recipeThumb}
            ingredientThumb={obj[key][i].ingredientThumb}
            haveNum={obj[key][i].needNum}
            needNum={obj[key][i].needNum}
            canCook={false}
          />
        );
      }
    });
  }

  return (
    <div className="recipe-infos">
      <hr />
      <table border="1">
        <thead align="center">
          <tr>
            <th>料理</th>
            <th>材料</th>
            <th>所持数</th>
            <th>調理可否</th>
          </tr>
        </thead>
        <tbody>{info}</tbody>
      </table>
    </div>
  );
};

export default RecipeInfos;
