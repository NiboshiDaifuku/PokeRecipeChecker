export function getIngredientThumb(name: string) {
  let imageName = "";
  switch (name) {
    case "リンゴ":
      imageName = "apple.webp";
      break;
    case "しっぽ":
      imageName = "tail.webp";
      break;
    case "ハーブ":
      imageName = "herb.webp";
      break;
    case "トマト":
      imageName = "tomato.webp";
      break;
    case "イモ":
      imageName = "potato.webp";
      break;
    case "カカオ":
      imageName = "cacao.webp";
      break;
    case "ミルク":
      imageName = "milk.webp";
      break;
    case "ネギ":
      imageName = "green_onion.webp";
      break;
    case "ショウガ":
      imageName = "ginger.webp";
      break;
    case "キノコ":
      imageName = "mushroom.webp";
      break;
    case "蜜":
      imageName = "honey.webp";
      break;
    case "卵":
      imageName = "egg.webp";
      break;
    case "豆":
      imageName = "bean.webp";
      break;
    case "豆肉":
      imageName = "meat_bean.webp";
      break;
    case "オイル":
      imageName = "oil.webp";
      break;
    default:
      return <></>;
  }
  const IMAGE_PATH = "./images/ingredient/" + imageName;
  return <img src={IMAGE_PATH} alt="" />;
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
