'use client';

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

export const BreadcrumbJsonLD = () => {
  const [url, setUrl] = useState("");
  const [itemListElement, setItemListElement] = useState<
    { "@type": string; position: number; name: string; item: string; }[]
  >([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    setUrl(window.location.origin);
  }, []);

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
    console.log("pagePath", pagePath);

    const newList: { "@type": string; position: number; name: string; item: string; }[] = [];

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
      const topItem = {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": url,
      };
      newList.push(topItem);

      const pagePathSplit = pagePath.split("/").filter(Boolean);
      console.log('pagePathSplit', pagePathSplit);

      let currentUrl = url;
      const fetchTitles = async () => {
        const titlePromises = pagePathSplit.map(async (path, index) => {
          currentUrl += `/${path}`;
          let itemName = await getTitle(currentUrl);
          if (!itemName) {
            itemName = path;
          }
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

      if (!scriptRef.current) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(jsonLD);
        scriptRef.current = script;

        const footer = document.getElementById('footer');
        if (footer) {
          footer.appendChild(script);
        }
      } else {
        scriptRef.current.innerHTML = JSON.stringify(jsonLD);
      }
    }
  }, [itemListElement, loading]);

  return <></>;
};