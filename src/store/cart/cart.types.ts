import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPE {
  SET_CART_ITEMS = "SET_CART_ITEMS",
  SET_IS_CART_OPEN = "SET_IS_CART_OPEN",
  SET_CART_COUNT = "SET_CART_COUNT",
  SET_CART_TOTAL = "SET_CART_TOTAL",
}

export type CartItem = CategoryItem & { quantity: number };
