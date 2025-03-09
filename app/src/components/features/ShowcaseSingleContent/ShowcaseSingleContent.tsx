import parse from "html-react-parser";
import PaginationSingle from "~/src/components/features/PaginationSingle/PaginationSingle";
import ButtonWrapper from "~/src/components/layouts/ButtonWrapper/ButtonWrapper";
import DivContentsWrapper from "~/src/components/layouts/DivContentsWrapper/DivContentsWrapper";
import { LinkButton } from "~/src/components/parts/buttons/LinkButton/LinkiButton";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import type { ShowCaseContentType } from "~/src/types/ApiTypes";
import { getFormatedDateString } from "~/src/utils/getFormatedDateString";
import styles from "./ShowcaseSingleContent.module.scss";

export type ShowcaseSingleContentProps = {
  post: ShowCaseContentType;
  prevContent?: { id: string; title: string };
  nextContent?: { id: string; title: string };
  archiveInfo: {
    linkText: string;
    linkTo: string;
  };
};

const ShowcaseSingleContent = (props: ShowcaseSingleContentProps) => {
  const { post, prevContent, nextContent, archiveInfo } = props;

  return (
    <div className={styles["showcase-single"]}>
      <DivContentsWrapper>
        <SimpleTitle tag="h2" text={post.title} />
        {post.categories && (
          <ul className={styles["showcase-single-category"]}>
            {post.categories.map((category: string, key: number) => (
              <li key={key}>{category}</li>
            ))}
          </ul>
        )}
        <time className={styles["showcase-single-category-date"]}>
          {getFormatedDateString(post.updatedAt)}
        </time>
        <div className={styles["showcase-single-detailbox"]}>
          <img src={post.image.url} alt={post.title} className={styles["showcase-single-image"]} />
          <div className={styles['showcase-single-details']}>
            <p className={styles["showcase-single-overview"]}>{parse(post.overview)}</p>
            <div className={styles['showcase-single-howto-container']}>
              <h3 className={styles["showcase-single-item-title"]}>How to use</h3>
              <div className={styles['showcase-single-howto']}>{parse(post.howto)}</div>
            </div>
          </div>
        </div>
        
        {post.props && (
              <>
                <h3 className={styles["showcase-single-item-title"]}>props</h3>
                <dl className={styles["showcase-single-props"]}>
                  {post.props.map((item, key: number) => (
                    <div className={styles["showcase-single-props__inner"]} key="key">
                      <dt className={`${styles['col-dt']} ${styles['col-dt--1']}`}>論理名</dt>
                      <dd className={`${styles['col-dd']} ${styles['col-dd--1']}`}>{item.logicalname}</dd>
                      <dt className={`${styles['col-dt']} ${styles['col-dt--2']}`}>物理名</dt>
                      <dd className={`${styles['col-dd']} ${styles['col-dd--2']}`}>{item.physicalname}</dd>
                      <dt className={`${styles['col-dt']} ${styles['col-dt--3']}`}>型</dt>
                      <dd className={`${styles['col-dd']} ${styles['col-dd--3']}`}>{item.type}</dd>
                      <dt className={`${styles['col-dt']} ${styles['col-dt--4']}`}>必須</dt>
                      <dd className={`${styles['col-dd']} ${styles['col-dd--4']}`}>{item.required ? "◯" : "☓"}</dd>
                      <dt className={`${styles['col-dt']} ${styles['col-dt--5']}`}>備考</dt> 
                      <dd className={`${styles['col-dd']} ${styles['col-dd--5']}`}>{item.description}</dd>
                      {item.subprops && (
                        <div className={styles['showcase-single-props--sub']}>
                          {item.subprops.map((subItem, subKey: number) => (
                            <div key={subKey} className={styles["showcase-single-props__inner--sub"]}>
                              <dt className={`${styles['col-dt']} ${styles['col-dt--1']}`}>論理名</dt>
                              <dd className={`${styles['col-dd']} ${styles['col-dd--1']}`}>{subItem.logicalname}</dd>
                              <dt className={`${styles['col-dt']} ${styles['col-dt--2']}`}>物理名</dt>
                              <dd className={`${styles['col-dd']} ${styles['col-dd--2']}`}>{subItem.physicalname}</dd>
                              <dt className={`${styles['col-dt']} ${styles['col-dt--3']}`}>型</dt>
                              <dd className={`${styles['col-dd']} ${styles['col-dd--3']}`}>{item.type}</dd>
                              <dt className={`${styles['col-dt']} ${styles['col-dt--4']}`}>必須</dt>
                              <dd className={`${styles['col-dd']} ${styles['col-dd--4']}`}>{subItem.required}</dd>
                              <dt className={`${styles['col-dt']} ${styles['col-dt--5']}`}>備考</dt>
                              <dd className={`${styles['col-d4']} ${styles['col-dd--5']}`}>{subItem.description}</dd>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </dl>
              </>
            )}
       
      </DivContentsWrapper>
      <DivContentsWrapper>
        <PaginationSingle path="/showcase" prev={prevContent} next={nextContent} />
        <ButtonWrapper marginTop="m">
          <LinkButton
            linkText={archiveInfo.linkText}
            linkTo={archiveInfo.linkTo}
            type={"flip"}
          />
        </ButtonWrapper>
      </DivContentsWrapper>
    </div>
  );
};

export default ShowcaseSingleContent;