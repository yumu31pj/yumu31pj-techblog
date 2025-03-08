import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix('blogs', [
    index("routes/blogs/blogs-archive.tsx", { id: "blogs" }), // /blogs へのルーティングを追加
    ...prefix('page', [
      route(":page?", "routes/blogs/blogs-archive.tsx") // /blogs/page/:page へのルーティング、pageの数字が空白でもいいように?を追加
    ]),
    route(":id", "routes/blogs/blogs-single.tsx"), // /blogs/:id へのルーティング
  ]),
] satisfies RouteConfig;
