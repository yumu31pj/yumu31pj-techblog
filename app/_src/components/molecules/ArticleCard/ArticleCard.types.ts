import { Category } from "app/_src/types/microCMS/Category.types";

export type ArticleCardType = {
  title: string;
  linkTo: string;
  date: string;
  categories: Category[];
}