import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout("site-base-layout.tsx", [
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
  ]),

  // parallax配下はレイアウトを変更するためlayoutを指定
  layout("src/components/pages/parallax/ParallaxContentsLayout.tsx", [
    ...prefix("parallax", [
      index('routes/parallax/parallax-sample.tsx'),
    ])
  ]),
  layout("routes/reproduce/reproduce-layout.tsx", [
    ...prefix('reproduce', [
      index("routes/reproduce/reproduce-top.tsx"),
      ...prefix('1-profile', [
        index('routes/reproduce/1-profile/profile-top.tsx'),
        ...prefix('detail', [
          index('routes/reproduce/1-profile/detail/profile-detail.tsx'),
        ]),
      ]),
      ...prefix('2-photobook', [
        index('routes/reproduce/2-photobook/page-photobook.tsx')
      ]),
      ...prefix('3-photobook2', [
        index('routes/reproduce/3-photobook2/page-photobook2.tsx')
      ]),
      ...prefix('4-recipe', [
        index('routes/reproduce/4-recipe/page-recipe.tsx')
      ]),
      ...prefix('5-recipe-detail', [
        index('routes/reproduce/5-recipe-detail/page-recipe-detail.tsx')
      ]),
      ...prefix('6-brand', [
        index('routes/reproduce/6-brand/page-brand.tsx')
      ]),
      layout("routes/reproduce/7-portfolio/laytout-portfolio.tsx", [
        ...prefix('7-portfolio', [
          index('routes/reproduce/7-portfolio/page-portfolio.tsx'),
          ...prefix('about', [
            index('routes/reproduce/7-portfolio/about/page-portfolio-about.tsx')
          ]),
          ...prefix('news', [
            index('routes/reproduce/7-portfolio/news/page-portfolio-news.tsx')
          ]),
          ...prefix('works', [
            index('routes/reproduce/7-portfolio/works/archive-portfolio-works.tsx')
          ]),
        ]),
      ])
    ])
  ])
  // ...prefix('reprofuce') {

  // }
  
] satisfies RouteConfig;
