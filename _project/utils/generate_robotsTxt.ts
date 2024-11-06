import * as fs from "fs";
import * as path from "path";

const generate_robotsTxt = () => {
  const sourcePath = path.resolve("robots.txt"); // プロジェクトルートの robots.txt
  const destinationPath = path.resolve("out/robots.txt"); // コピー先

  // コピー処理
  fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
      console.error("Error copying robots.txt:", err);
    } else {
      console.log("robots.txt copied successfully to /app/out/");
    }
  });
};

// nodeでの実行例
// npx ts-node _project/utils/generate_robotsTxt.ts

// 関数呼び出し
generate_robotsTxt();

export default generate_robotsTxt;
