import CountIngredient from "./CountIngredient";

const InputIngredients = ({ ingredientsInfos, setIngredientsInfos }) => {
  // const applyIngredients = () => {};

  return (
    <div className="input-text-box">
      <CountIngredient name="リンゴ" count="0" />
      <CountIngredient name="しっぽ" count="0" />
      <CountIngredient name="ハーブ" count="0" />
      <CountIngredient name="トマト" count="0" />
      <CountIngredient name="イモ" count="0" />
      <CountIngredient name="カカオ" count="0" />
      <CountIngredient name="ミルク" count="0" />
      <CountIngredient name="ネギ" count="0" />
      <CountIngredient name="ショウガ" count="0" />
      <CountIngredient name="キノコ" count="0" />
      <CountIngredient name="蜜" count="0" />
      <CountIngredient name="卵" count="0" />
      <CountIngredient name="豆" count="0" />
      <CountIngredient name="豆肉" count="0" />
      <CountIngredient name="オイル" count="0" />
      {/* <button onClick={applyIngredients}>材料を反映する</button> */}
    </div>
  );
};

export default InputIngredients;
