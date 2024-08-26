import { getMicroCMSConnection } from "@/_libs/utils/getMicroCMSClient";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./PageFlip.module.scss";
import PageFlipType from "./PageFlipType";

/**
 * Pagination for MicroCMS contents 
 */
const PageFlip = (props: PageFlipType) => {
  const { microCMSAuth, endpointId, contentId } = props;
  const [postList, setPostList] = useState<any>();
  const [isPostListFetched, setIsPostListFetched] = useState(false);
  const [prevTitle, setPrevTitle] = useState<string>("");
  const [prevId, setPrevId] = useState<string>("");
  const [nextTitle, setNextTitle] = useState<string>("");
  const [nextId, setNextId] = useState<string>("");

  const client = getMicroCMSConnection(microCMSAuth);

  useEffect(() => {
    const getPostList = async () => {
      let response;

      response = await client.get({
        endpoint: endpointId,
        queries: {
          fields: "id,title",
          limit: 100,
          orders: "-publishedAt",
        },
      });
      
      const totalCount = response.totalCount || 0;

      // If totalCount is 100 or more, make an additional request and get all data
      if (totalCount > 100) {
        let remaining = totalCount - 100;
        let offset = 100;
  
        // Loop until all remaining data is retrieved
        while (remaining > 0) {
          const additionalResponse = await client.get({
            endpoint: endpointId,
            queries: {
              fields: "id,title",
              limit: remaining > 100 ? 100 : remaining, // If there are less than 100 items left, specify the remaining number
              offset: offset,
              orders: "-publishedAt",
            },
          });
  
          response.contents = [...response.contents, ...additionalResponse.contents]; // Combine acquired data
          offset += 100;
          remaining -= 100;
        }
      }
  
      setPostList(response); // set data
      setIsPostListFetched(true);
    };
    getPostList();

    const updatePrevNext = async () => {
      if (postList) {
        const totalCount = postList.totalCount || 0;
        const currentIndex = postList.contents.findIndex(
          (content: any) => content.id === contentId
        );

        const prevContent = postList.contents[currentIndex - 1];
        const nextContent = postList.contents[currentIndex + 1];

        if (prevContent !== undefined) {
          setPrevTitle(prevContent.title);
          setPrevId(prevContent.id);
        } else {
          setPrevTitle("");
          setPrevId("");
        }

        if (nextContent !== undefined) {
          setNextTitle(nextContent.title);
          setNextId(nextContent.id);
        } else {
          setNextTitle("");
          setNextId("");
        }
      }
    };
    updatePrevNext();
  }, [contentId, endpointId, isPostListFetched]);

  return (
    <ul className={styles.prevNext}>
      {prevTitle && (
        <li className={styles.prevNext__prev}>
          <Link className={styles.prevNext__title} href={`?id=${prevId}`}>{prevTitle}</Link>
        </li>
      )}
      {nextTitle && (
        <li className={styles.prevNext__next}>
          <Link className={styles.prevNext__title} href={`?id=${nextId}`}>{nextTitle}</Link>
        </li>
      )}
    </ul>
  );
};

export default PageFlip;
