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
            <table className={styles["showcase-props-table"]}>
              <colgroup>
                <col className="col--20p" />
                <col className="col--20p" />
                <col className="col--15p" />
                <col className="col--5p" />
                <col className="col--40p" />
              </colgroup>
              <thead>
                <tr>
                  <th>論理名</th><th>物理名</th><th>型</th><th>必須</th><th>備考</th>
                </tr>
              </thead>
              <tbody>
                {post.props.map((item, key: number) =>(
                  <>
                    <tr>
                      <td>{item.logicalname}</td>
                      <td>{item.physicalname}</td>
                      <td>{item.type}</td>
                      <td>{item.required ? "◯" : "☓"}</td>
                      <td>{item.description}</td>
                    </tr>
                    {item.subprops && item.subprops.map((subItem, key: number) => (
                      <tr>
                        <td className={styles["subprops"]}>{subItem.logicalname}</td>
                        <td className={styles["subprops"]}>{subItem.physicalname}</td>
                        <td className={styles["subprops"]}>{subItem.type}</td>
                        <td className={styles["subprops"]}>{subItem.required ? "◯" : "☓"}</td>
                        <td className={styles["subprops"]}>{subItem.description}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </>
        )}
        {post.source && (
          <>
            <h3 className={styles["showcase-single-item-title"]}>Code</h3>
            <div className={styles["showcase-single-item-source"]}>
              {parse(post.source)}
            </div>
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