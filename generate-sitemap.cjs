const fs = require("fs");
const path = require("path");

const BASE_URL = "https://blog.yumu31pj.tech"; // 自サイトのURL
const DIST_DIR = path.join(__dirname, "build/client");

function getPaths(dir, basePath = "") {
  let urls = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  let lastModified = null;

  if (items.some((item) => item.name === "index.html")) {
    const indexPath = path.join(dir, "index.html");
    lastModified = fs.statSync(indexPath).mtime.toISOString();
    urls.push({ path: basePath || "/", lastmod: lastModified });
  }

  for (const item of items) {
    if (item.isDirectory()) {
      const subDirPath = path.join(dir, item.name);
      const subPaths = getPaths(subDirPath, `${basePath}/${item.name}`);

      // フォルダの最終更新日を取得（index.htmlがない場合はフォルダ自体）
      let folderLastModified = fs.statSync(subDirPath).mtime.toISOString();
      if (subPaths.length > 0) {
        folderLastModified = subPaths[0].lastmod; // 子ディレクトリの最初のlastmodを継承
      }

      urls.push({ path: `${basePath}/${item.name}`, lastmod: folderLastModified });
      urls = urls.concat(subPaths);
    }
  }

  return urls;
}

const urls = getPaths(DIST_DIR);

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

console.log("✅ sitemap.xml を生成しました！");
