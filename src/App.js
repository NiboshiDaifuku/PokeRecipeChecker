import { useEffect, useState } from "react";
import InputTextBox from "./component/InputTextBox";
import RecipeInfos from "./component/RecipeInfos";
import { recipeObj } from "./lib/RecipeList";
import { getRecipeCacheFromLocalStorage, setRecipeCacheToLocalStorage } from "./lib/DatabaseLib";
import "./App.css";

export default function App() {
  const appVer = "v1.0";
  const [recipeInfos, setRecipeInfos] = useState([]);

  // ページ読み込み時にLocalStorageにレシピ一覧があれば反映する
  useEffect(() => {
    const cache = getRecipeCacheFromLocalStorage();
    if (cache !== "") {
      setRecipeInfos(cache);
    }
  }, []);

  // レシピ一覧がセットされたら、LocalStorageに保存する
  useEffect(() => {
    setRecipeCacheToLocalStorage(recipeInfos);
  }, [recipeInfos]);

  return (
    <div className="App">
      <h1>PokeRecipeChecker（{appVer}）</h1>
      <h3>ポケモンスリープの作成可能レシピを楽に可視化するアプリです</h3>
      <InputTextBox recipeInfos={recipeInfos} setRecipeInfos={setRecipeInfos} />
      <RecipeInfos recipeObj={recipeObj} />
    </div>
  );
}
