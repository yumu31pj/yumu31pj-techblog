import { BlogCategoryListContext } from "app/_src/contexts/BlogCategoryListContext.provider";
import { useContext } from "react";

const CatTest = () => {
  const {blogCategoryList, setBlogCategoryList} = useContext(BlogCategoryListContext);

  return (
    <>
      {JSON.stringify(blogCategoryList)}
    </>
  )
}

export default CatTest;