'use client';

import { SiteMapType } from "@/types/SiteMap.types";
import getPathArray from "@/utils/getPathArray";
import { Suspense, useEffect, useState } from "react";

type Props = {
  sitemap: SiteMapType
}

const BreadcrumbJsonLD = (props: Props) => {
  const { sitemap } = props;
  const [breadcrumbList, setBreadcrumbList] = useState<any[]>([]);
  const [pageTitle, setPageTitle] = useState<string>('');

  useEffect(() => {
    // Helper function to get title based on query param
    const getTitleFromPath = () => {
      const path = location.pathname || '';
      const pathArray = getPathArray(path);
      const isPostPage = path.includes('/post/') && location.search.includes('id=');
      
      if (isPostPage) {
        setTimeout(() => {
          setPageTitle(document.title); // Set title for post pages
        }, 500);
      }
      
      const list = pathArray.map((path: string, index: number) => {
        const match = Object.values(sitemap).find(page => page.slug === path);
        return match ? {
          "@type": "ListItem",
          "position": index + 1,
          "name": match.title,
          "item": `${window.location.origin}${match.slug}`
        } : null;
      }).filter(Boolean);

      if (isPostPage && pageTitle) {
        list.push({
          "@type": "ListItem",
          "position": list.length + 1,
          "name": pageTitle,
          "item": `${window.location.origin}${path}`
        });
      }

      setBreadcrumbList(list);
    };

    // Call helper function initially
    getTitleFromPath();

    // Add event listener to handle title changes if necessary
    const handleTitleChange = () => {
      getTitleFromPath();
    };
    window.addEventListener('titlechange', handleTitleChange);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('titlechange', handleTitleChange);
    };
  }, [pageTitle]);

  if (breadcrumbList.length === 0) return null; // Initial render without data

  const breadcrumbJsonLD = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList
  };

  return (
    <Suspense>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLD)}
      </script>
    </Suspense>
  );
}

export default BreadcrumbJsonLD;
