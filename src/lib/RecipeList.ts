export function getIngredientThumb(name: string) {
  switch (name) {
    case "リンゴ":
      return "./images/ingredient/apple.webp";
    case "しっぽ":
      return "./images/ingredient/tail.webp";
    case "ハーブ":
      return "./images/ingredient/herb.webp";
    case "トマト":
      return "./images/ingredient/tomato.webp";
    case "イモ":
      return "./images/ingredient/potato.webp";
    case "カカオ":
      return "./images/ingredient/cacao.webp";
    case "ミルク":
      return "./images/ingredient/milk.webp";
    case "ネギ":
      return "./images/ingredient/green_onion.webp";
    case "ショウガ":
      return "./images/ingredient/ginger.webp";
    case "キノコ":
      return "./images/ingredient/mushroom.webp";
    case "蜜":
      return "./images/ingredient/honey.webp";
    case "卵":
      return "./images/ingredient/egg.webp";
    case "豆":
      return "./images/ingredient/bean.webp";
    case "豆肉":
      return "./images/ingredient/meat_bean.webp";
    case "オイル":
      return "./images/ingredient/oil.webp";
    default:
      return "";
  }
}

export const recipeObj: Object = {
  Curry: [
    {
      recipeThumb: "./images/curry/curry01.webp",
      ingredientThumb: [""],
      needNum: [0]
    },
    {
      recipeThumb: "./images/curry/curry02.webp",
      ingredientThumb: ["リンゴ"],
      needNum: [7]
    },
    {
      recipeThumb: "./images/curry/curry03.webp",
      ingredientThumb: ["しっぽ", "ハーブ"],
      needNum: [8, 25]
    },
    {
      recipeThumb: "./images/curry/curry04.webp",
      ingredientThumb: ["トマト", "ハーブ"],
      needNum: [10, 5]
    },
    {
      recipeThumb: "./images/curry/curry05.webp",
      ingredientThumb: ["イモ", "トマト", "カカオ", "ミルク"],
      needNum: [18, 15, 12, 10]
    },
    {
      recipeThumb: "./images/curry/curry06.webp",
      ingredientThumb: ["ネギ", "ショウガ", "ハーブ"],
      needNum: [14, 10, 8]
    },
    {
      recipeThumb: "./images/curry/curry07.webp",
      ingredientThumb: ["キノコ", "イモ"],
      needNum: [14, 9]
    },
    {
      recipeThumb: "./images/curry/curry08.webp",
      ingredientThumb: ["蜜", "トマト", "卵", "イモ"],
      needNum: [12, 11, 8, 4]
    },
    {
      recipeThumb: "./images/curry/curry09.webp",
      ingredientThumb: ["ミルク", "豆肉"],
      needNum: [8, 8]
    },
    {
      recipeThumb: "./images/curry/curry10.webp",
      ingredientThumb: ["ミルク", "イモ", "キノコ"],
      needNum: [10, 8, 4]
    },
    {
      recipeThumb: "./images/curry/curry11.webp",
      ingredientThumb: ["ミルク"],
      needNum: [7]
    },
    {
      recipeThumb: "./images/curry/curry12.webp",
      ingredientThumb: ["豆肉"],
      needNum: [7]
    },
    {
      recipeThumb: "./images/curry/curry13.webp",
      ingredientThumb: ["蜜"],
      needNum: [7]
    },
    {
      recipeThumb: "./images/curry/curry14.webp",
      ingredientThumb: ["豆", "豆肉", "ネギ", "キノコ"],
      needNum: [15, 9, 9, 5]
    },
    {
      recipeThumb: "./images/curry/curry15.webp",
      ingredientThumb: ["豆肉", "オイル"],
      needNum: [10, 5]
    },
    {
      recipeThumb: "./images/curry/curry16.webp",
      ingredientThumb: ["卵", "トマト"],
      needNum: [10, 6]
    },
    {
      recipeThumb: "./images/curry/curry17.webp",
      ingredientThumb: ["豆", "豆肉", "ハーブ", "卵"],
      needNum: [12, 6, 4, 4]
    }
  ]
  // Salad: [
  //   {
  //     recipeThumb: "サラダ画像",
  //     ingredientThumb: ["材料画像"],
  //     needNum: [0]
  //   }
  // ],
  // Dessert: [
  //   {
  //     recipeThumb: "デザート画像",
  //     ingredientThumb: ["材料画像"],
  //     needNum: [0]
  //   }
  // ]
};
