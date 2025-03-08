// このファイルでは相対パスでimportすること

import type { Config } from "@react-router/dev/config";
import { PerPage } from "./app/src/configs/SiteInfo";
import getAllContentIds from "./app/src/utils/microcms/getAllContentIds";
import getTotalPages from "./app/src/utils/microcms/getTotalPages";


export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // prerender: true,
  prerender: async ({ getStaticPaths }) => {
    const auth = {
      serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || "",
      apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
    };

    
    // ブログの総投稿数を取得
    const blogTotalCount = await getTotalPages('blog', auth);
    const blogTotalPages = Math.ceil(blogTotalCount / PerPage);
    // ページ数の番号を[1, 2, 3, 4, 5]のように配列に入れ事前レンダリングしてSSGで生成
    const blogPages = Array.from({ length: blogTotalPages }, (_, i) => i + 1);
    // ブログのIDを全て取得して配列に格納
    // returnの中でmapで回してページを事前レンダリングして生成
    const blogIds:string[] = await getAllContentIds('blog', auth);

    return [
      "/",
      "/blogs",
      ...blogPages.map((page) => `/blogs/page/${page}`),
      ...blogIds.map((id) => `/blogs/${id}`),
    ];
  },
} satisfies Config;
