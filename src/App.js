import { useEffect, useState } from "react";
import InputIngredients from "./component/InputIngredients";
import RecipeInfos from "./component/RecipeInfos";
import { recipeObj } from "./lib/RecipeList";
import {
  getIngredientsCacheFromLocalStorage,
  setIngredientsCacheToLocalStorage
} from "./lib/DatabaseLib";
import "./App.css";

export default function App() {
  const appVer = "v1.0";
  const [ingredientsInfos, setIngredientsInfos] = useState([]);

  // ページ読み込み時にLocalStorageにレシピ一覧があれば反映する
  useEffect(() => {
    const cache = getIngredientsCacheFromLocalStorage();
    if (cache !== "") {
      setIngredientsInfos(cache);
    }
  }, []);

  // レシピ一覧がセットされたら、LocalStorageに保存する
  useEffect(() => {
    setIngredientsCacheToLocalStorage(ingredientsInfos);
  }, [ingredientsInfos]);

  return (
    <div className="App">
      <h1>PokeRecipeChecker（{appVer}）</h1>
      <h3>ポケモンスリープの作成可能レシピを楽に可視化するアプリです</h3>
      <InputIngredients
        ingredientsInfos={ingredientsInfos}
        setIngredientsInfos={setIngredientsInfos}
      />
      <RecipeInfos recipeObj={recipeObj} />
    </div>
  );
}
