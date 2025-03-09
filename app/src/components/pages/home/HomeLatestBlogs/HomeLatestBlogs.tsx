import BlogArchiveCards from "~/src/components/features/BlogArchiveCards/BlogArchiveCards";
import ButtonWrapper from "~/src/components/layouts/ButtonWrapper/ButtonWrapper";
import DivContentsWrapper from "~/src/components/layouts/DivContentsWrapper/DivContentsWrapper";
import { LinkButton } from "~/src/components/parts/buttons/LinkButton/LinkiButton";
import type { BlogContentsType } from "~/src/types/ApiTypes";

const HomeLatestBlogs = (props: BlogContentsType) => {
  const {posts} = props;
  return (
    <DivContentsWrapper>
      <BlogArchiveCards
        posts={posts}
      />
      <ButtonWrapper marginTop="m">
        <LinkButton
          linkText={"ブログ一覧へ"}
          linkTo={"/blogs/"}
          type={"flip"}
        />
      </ButtonWrapper>

    </DivContentsWrapper>
  )
}

export default HomeLatestBlogs;
