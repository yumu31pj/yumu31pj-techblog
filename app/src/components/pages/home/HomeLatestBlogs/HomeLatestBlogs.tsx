import BlogArchiveCards from "~/src/components/features/BlogArchiveCards/BlogArchiveCards";
import DivContentsWrapper from "~/src/components/layouts/DivContentsWrapper/DivContentsWrapper";
import type { BlogContentsType } from "~/src/types/ApiTypes";

const HomeLatestBlogs = (props: BlogContentsType) => {
  const {posts} = props;
  return (
    <DivContentsWrapper>
      <BlogArchiveCards
        posts={posts}
      />
    </DivContentsWrapper>
  )
}

export default HomeLatestBlogs;
