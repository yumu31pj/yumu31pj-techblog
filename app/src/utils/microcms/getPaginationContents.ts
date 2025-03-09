import type { BlogContentType } from "~/src/types/ApiTypes";
import getAllContentIds from "~/src/utils/microcms/getAllContentIds";
import ssf_getContentByID from "~/src/utils/microcms/ssf_getContentsByID";

type PaginationContent = { id: string; title: string } | undefined;

async function getPaginationContents(
  contentId: string,
  endpoint: string,
  auth: { serviceDomain: string; apiKey: string }
): Promise<{ prevContent: PaginationContent; nextContent: PaginationContent }> {
  const blogIds: string[] = await getAllContentIds(endpoint, auth);
  // 自身のIDが見つかった最初の位置を取得
  const currentIndex = blogIds.indexOf(contentId);
  const prevId = currentIndex > 0 ? blogIds[currentIndex - 1] : null;
  const nextId =
    currentIndex < blogIds.length - 1 ? blogIds[currentIndex + 1] : null;

  let prevContent: PaginationContent = undefined;
  let nextContent: PaginationContent = undefined;

  if (prevId) {
    // 前の投稿のIDが見つかったら投稿タイトルを取得してタイトルをセット
    const prevResponse: BlogContentType = await ssf_getContentByID(
      endpoint,
      auth,
      prevId
    );
    prevContent = { id: prevId, title: prevResponse.title };
  }

  if (nextId) {
    // 次の投稿のIDが見つかったら投稿タイトルを取得してタイトルをセット
    const nextResponse: BlogContentType = await ssf_getContentByID(
      endpoint,
      auth,
      nextId
    );
    nextContent = { id: nextId, title: nextResponse.title };
  }

  return { prevContent, nextContent };
}

export default getPaginationContents;