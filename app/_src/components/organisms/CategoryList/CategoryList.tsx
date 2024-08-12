'use client';

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
      <p>Categories</p>
      <ul className={styles['category-list']}>
        {blogCategoryList.map((category: CategoryLinkType, key: number) => (
          <li key={key} className={styles['category-list__item']}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
