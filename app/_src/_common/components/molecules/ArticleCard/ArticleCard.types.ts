import { Category } from "@/_src/_common/types/microCMS/Category.types";

export type ArticleCardType = {
  title: string;
  linkTo: string;
  date: string;
  categories: Category[];
}