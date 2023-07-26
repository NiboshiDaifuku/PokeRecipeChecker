// 不要なHTMLタグを含んだ文字列から、欲しい要素のみを持つ配列を取り出して返す関数
const divideTarget = (target: string, regExp: RegExp, unnecessaryTag: string): string[] => {
  const tmpArray = target.match(regExp);
  return tmpArray.map((element) => element.replace(unnecessaryTag, "").replace('"', ""));
};

// レシピ一覧
export interface recipeInfoArray {
  recipeThumb: string;
  ingredientThumb: string;
  haveNum: number;
  needNum: number;
  canCook: boolean;
}

export const getRecipeInfo = (analysisTarget: string) => {
  const sharpUrlHeader = "https://cocoroplus.jp.sharp/";

  // サムネイル一覧
  const thumbTmpArray = divideTarget(analysisTarget, /src=.*?jpg/g, 'src="/');
  const recipeThumbArray = thumbTmpArray.map((element) => sharpUrlHeader + element);
  const ingredientThumbArray = thumbTmpArray.map((element) => sharpUrlHeader + element);

  // レシピ名一覧
  //   </p>を除去したいが、"/"も">"もエスケープできないので、pで判定している。
  //   "p"を含むレシピが公開された場合、おかしなことになるので注意★
  const nameArrayWithGarbage = divideTarget(
    analysisTarget,
    /class="DefaultText default-text".*?p/g,
    'class="DefaultText default-text"'
  );
  const nameArray = nameArrayWithGarbage.map((element) =>
    element.replace("</p", "").replace(">", "")
  );

  const recipeInfo: recipeInfoArray[] = [];
  for (let i = 0; i < nameArray.length; ++i) {
    recipeInfo.push({
      recipeThumb: recipeThumbArray[i],
      ingredientThumb: ingredientThumbArray[i],
      haveNum: 0,
      needNum: 10,
      canCook: false
    });
  }

  // フォーマッタのせいでforの後にセミコロンを入れられないため、
  // return文の解釈が上手くいかずエラーになる。
  // 無意味な変数で暫定対応★
  let avoidError; // eslint-disable-line

  return recipeInfo;
};
