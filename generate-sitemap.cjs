const fs = require("fs");
const path = require("path");

const BASE_URL = "https://blog.yumu31pj.tech"; // 自サイトのURL
const DIST_DIR = path.join(__dirname, "build/client");

function getPaths(dir, basePath = "") {
  let urls = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  let lastModified = null;
  let hasIndexHtml = items.some((item) => item.name === "index.html");

  if (hasIndexHtml) {
    const indexPath = path.join(dir, "index.html");
    lastModified = fs.statSync(indexPath).mtime.toISOString();
    urls.push({ path: basePath || "/", lastmod: lastModified });
  }

  for (const item of items) {
    if (item.isDirectory()) {
      const subDirPath = path.join(dir, item.name);
      const subPaths = getPaths(subDirPath, `${basePath}/${item.name}`);

      // `subPaths` に有効な URL がある場合のみ追加
      if (subPaths.length > 0) {
        urls = urls.concat(subPaths);
      }
    }
  }

  return urls;
}

const urls = getPaths(DIST_DIR);

if (urls.length > 0) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      ({ path, lastmod }) => `
  <url>
    <loc>${BASE_URL}${path.replace(/\/$/, "")}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(DIST_DIR, "sitemap.xml"), sitemap, "utf8");
  console.log("[SUCCESS] sitemap.xml を生成しました！");
} else {
  console.log("[FAILURE] sitemap.xml を生成しませんでした（有効なページがありません）");
}
