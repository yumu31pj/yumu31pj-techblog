// このファイルでは相対パスでimportすること

import type { Config } from "@react-router/dev/config";
import { PerPage } from "./app/src/configs/SiteInfo";
import { getAllBlogCategories } from "./app/src/utils/microcms/getAllBlogCategories";
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

    const showcaseAuth = {
      serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN_SHOWCASE || "",
      apiKey: process.env.NEXT_PUBLIC_API_KEY_SHOWCASE || "",
    }

    
    // ブログの総投稿数を取得
    const blogTotalCount = await getTotalPages('blog', auth);
    const blogTotalPages = Math.ceil(blogTotalCount / PerPage);
    // ページ数の番号を[1, 2, 3, 4, 5]のように配列に入れ事前レンダリングしてSSGで生成
    const blogPages = Array.from({ length: blogTotalPages }, (_, i) => i + 1);
    // ブログのIDを全て取得して配列に格納
    // returnの中でmapで回してページを事前レンダリングして生成
    const blogIds:string[] = await getAllContentIds('blog', auth);

    // カテゴリ一覧と各カテゴリの投稿数を取得
    const categoryCounts = await getAllBlogCategories(auth);
    console.log("- - - - - - - - - - - categoryCounts - - - - - - - - - - - :", categoryCounts);

    // カテゴリごとのページネーションを生成
    const categoryPages = categoryCounts.flatMap((category) => {
      const totalPages = Math.ceil(category.count / PerPage);
      return Array.from({ length: totalPages }, (_, i) => `/blogs/category/${category.id}/page/${i + 1}`);
    });

     // showcaseの総投稿数を取得
     const showcaseTotalCount = await getTotalPages('showcase', showcaseAuth);
     const showCaseTotalPages = Math.ceil(showcaseTotalCount / PerPage);
     // ページ数の番号を[1, 2, 3, 4, 5]のように配列に入れ事前レンダリングしてSSGで生成
     const showcasePages = Array.from({ length: showCaseTotalPages }, (_, i) => i + 1);
     // showcaseのIDを全て取得して配列に格納
     // returnの中でmapで回してページを事前レンダリングして生成
     const showcaseIds:string[] = await getAllContentIds('showcase', showcaseAuth);
 

    return [
      "/",
      "/blogs",
      ...blogPages.map((page) => `/blogs/page/${page}`),
      ...blogIds.map((id) => `/blogs/${id}`),
      ...categoryCounts.map((category) => `/blogs/category/${category.id}`), // カテゴリページを追加
      ...categoryPages, // カテゴリのページネーションを追加
      "/library",
      "/parallax",
      "/showcase",
      ...showcasePages.map((page) => `/showcase/page/${page}`),
      ...showcaseIds.map((id) => `/showcase/${id}`),
      "/reproduce",
      "/reproduce/1-profile",
    ];
  },
} satisfies Config;
