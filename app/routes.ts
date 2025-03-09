import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix('blogs', [
    index("routes/blogs/blogs-archive.tsx", { id: "blogs" }), // /blogs へのルーティングを追加
    ...prefix('page', [
      route(":page?", "routes/blogs/blogs-archive.tsx") // /blogs/page/:page へのルーティング、pageの数字が空白でもいいように?を追加
    ]),
    route(":id", "routes/blogs/blogs-single.tsx"), // /blogs/:id へのルーティング
    ...prefix('category', [
      route(":category", "routes/blogs/blogs-category.tsx", { id: "blogs-category" }),
      ...prefix('page', [
        route(":page?", "routes/blogs/blogs-category.tsx", { id: "blogs-category-page" })
      ])
    ]),
  ]),
  ...prefix('library', [
    index("routes/library/library-top.tsx"),
  ]),
  ...prefix('showcase', [
    index("routes/showcase/showcase-archive.tsx", { id: "showcase" }), // /blogs へのルーティングを追加
    ...prefix('page', [
      route(":page?", "routes/showcase/showcase-archive.tsx") // /blogs/page/:page へのルーティング、pageの数字が空白でもいいように?を追加
    ]),
    route(":id", "routes/showcase/showcase-single.tsx"),
  ]),
] satisfies RouteConfig;
