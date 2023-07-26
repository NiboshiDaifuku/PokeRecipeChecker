export const getIngredientsCacheFromLocalStorage = () => {
  if (window.localStorage) {
    return JSON.parse(localStorage.getItem("recipes"));
  } else {
    return "";
  }
};

export const setIngredientsCacheToLocalStorage = (recipeInfos) => {
  let saveSuccessFlag = false;
  if (window.localStorage) {
    const json = JSON.stringify(recipeInfos);
    if (json !== "[]") {
      localStorage.setItem("recipes", json);
      saveSuccessFlag = true;
    }
  }
  return saveSuccessFlag;
};
