import BlogArchiveCards from "~/src/components/features/BlogArchiveCards/BlogArchiveCards";
import ButtonWrapper from "~/src/components/layouts/ButtonWrapper/ButtonWrapper";
import DivContentsWrapper from "~/src/components/layouts/DivContentsWrapper/DivContentsWrapper";
import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import { LinkButton } from "~/src/components/parts/buttons/LinkButton/LinkiButton";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import type { BlogContentsType } from "~/src/types/ApiTypes";

const HomeLatestBlogs = (props: BlogContentsType) => {
  const {posts} = props;
  return (
    <SectionWrapper>
      <SimpleTitle text="最新のブログ" tag="h2" />
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
    </SectionWrapper>
  )
}

export default HomeLatestBlogs;
