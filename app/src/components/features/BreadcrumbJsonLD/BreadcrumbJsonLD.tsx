'use client';

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

export const BreadcrumbJsonLD = () => {
  // window.location.origin　をsetUrlで保存する
  const [url, setUrl] = useState("");

  const [itemListElement, setItemListElement] = useState<
    { "@type": string; position: number; name: string; item: string; }[]
  >([]);

  // 現在のページのpathnameを取得
  const location = useLocation();

  // パンくずリストを生成している間はtrueで状態管理
  const [loading, setLoading] = useState(true);

  // scriptタグを参照するためのuseRef
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // コンポーネントマウント時にurlを設定
    setUrl(window.location.origin);
  }, []);

  // 非同期でtitleタグの値を取得する
  const getTitle = async (targetUrl: string) => {
    try {
      const response = await fetch(targetUrl);
      const html = await response.text();
      const match = html.match(/<title>(.*?)<\/title>/);
      return match ? match[1] : null;
    } catch (error) {
      console.error("Failed to fetch title:", error);
      return null;
    }
  };

  useEffect(() => {
    const pagePath = location.pathname;
    // console.log("pagePath", pagePath);

    const newList: { "@type": string; position: number; name: string; item: string; }[] = [];

    // トップページの場合はトップページのitemListElementを生成して処理を終了
    if (pagePath === "/" || pagePath === "/index.html") {
      const item = {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.href,
      };
      newList.push(item);
      setItemListElement(newList);
      setLoading(false);
    } else {
      // トップページのitemListElementを生成してnewsListに追加
      const topItem = {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": url,
      };
      newList.push(topItem);

      // ページパスを/で区切り空白だけの要素を除外
      const pagePathSplit = pagePath.split("/").filter(Boolean);

      let currentUrl = url;
      const fetchTitles = async () => {
        // パスごとにtitleタグを取得
        const titlePromises = pagePathSplit.map(async (path, index) => {
          currentUrl += `/${path}`;
          let itemName = await getTitle(currentUrl);
          // タイトルを取得できないときはパス名をnameの値とする
          if (!itemName) {
            itemName = path;
          }
          // 各階層のパンくずリストのitemListItemを生成
          return {
            "@type": "ListItem",
            "position": index + 2,
            "name": itemName,
            "item": currentUrl,
          };
        });
        const titles = await Promise.all(titlePromises);
        newList.push(...titles);
        setItemListElement(newList);
        setLoading(false);
      };
      fetchTitles();
    }
  }, [location.pathname, url]);

  useEffect(() => {
    if (!loading && itemListElement.length > 0) {
      const jsonLD = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement,
      };
  
      // `<footer>` 内にある data-breadcrumb-jsonld 属性付きの script を探す
      const existingScript = document.querySelector('#footer script[data-breadcrumb-jsonld]');
  
      if (existingScript) {
        // 既存のパンくず JSON-LD を更新
        existingScript.innerHTML = JSON.stringify(jsonLD);
      } else {
        // 既存のパンくず JSON-LDがなかったら新規作成
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute("data-breadcrumb-jsonld", "true");
        script.innerHTML = JSON.stringify(jsonLD);
        document.getElementById('footer')?.appendChild(script);
      }
    }
  }, [itemListElement, loading]);
  

  return <></>;
};