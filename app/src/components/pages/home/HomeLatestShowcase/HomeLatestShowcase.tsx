import ButtonWrapper from "~/src/components/layouts/ButtonWrapper/ButtonWrapper";
import SectionWrapper from "~/src/components/layouts/SectionWrapper/SectionWrapper";
import ShowCaseContents from "~/src/components/pages/showcase/ShowCaseContents/ShowCaseContents";
import { LinkButton } from "~/src/components/parts/buttons/LinkButton/LinkiButton";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import type { ShowCaseContentsType } from "~/src/types/ApiTypes";

const HomeLatestShowcase = (props: ShowCaseContentsType) => {
  const {posts} = props;

  return (
    <SectionWrapper>
      <SimpleTitle text="最新のコンポーネント紹介" tag="h2" />
      <ShowCaseContents
        posts={posts}
      />
      <ButtonWrapper marginTop="m">
        <LinkButton
          linkText={"コンポーネント紹介一覧へ"}
          linkTo={"/showcase/"}
          type={"flip"}
        />
      </ButtonWrapper>
    </SectionWrapper>
  )
}

export default HomeLatestShowcase;