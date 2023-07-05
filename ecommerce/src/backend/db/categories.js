import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Apple",
    description:
      "Do you want to experience the world of Apple? ",
  },
  {
    _id: uuid(),
    categoryName: "Samsung",
    description:
      "Do you want to experience the world of Samsung? ",
  },
  {
    _id: uuid(),
    categoryName: "realme",
    description:
      "Do you want to experience the world of realme? ",
  },
];
