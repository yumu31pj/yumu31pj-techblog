'use client';

import LabelLink from "@/_libs/components/atoms/links/LabelLink/LabelLink";
import SimpleTitleH3 from "@/_libs/components/atoms/titles/SimpleTitle/SimpleTitleH3/SimpleTitleH3";
import { BlogCategoryListContext } from "@/_src/contexts/BlogCategoryListContext.provider";
import { useContext } from "react";
import styles from "./CategoryList.module.scss";
import { CategoryLinkType } from "./CategoryList.types";

const CategoryList = () => {
  const { blogCategoryList } = useContext(BlogCategoryListContext);

  if (!blogCategoryList || blogCategoryList.length === 0) {
    return null;
  }

  return (
    <div>
      <SimpleTitleH3 title="Categories" />
      <ul className={styles['category-list']}>
        {blogCategoryList.map((category: CategoryLinkType, key: number) => (
          <li key={key} className={styles['category-list__item']}>
            <LabelLink linkText={category.name} linkTo={`?cat=${category.slug}`}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
