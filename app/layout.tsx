import { GoogleTagManager } from "@next/third-parties/google";
import HeaderBasic from "_31pr-bootstrap/src/features/headers/header-basic/header-basic";
import { SiteInfo } from "app/_project/configs/siteInfo";
import { HeaderContexts } from "app/_project/contexts/HeaderContexts";
import type { Metadata } from "next";
import "../_31pr-bootstrap/src/scss/styles.scss";

export const metadata: Metadata = {
  title: SiteInfo.siteTitle,
  description: SiteInfo.siteDescription,
  keywords: SiteInfo.siteKeywords
  // robots: {
  //   index: false, // set noindex
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <GoogleTagManager gtmId={SiteInfo.gtmId}/>
      <body>
        <HeaderBasic
          headerItems={HeaderContexts.headerItems}
        />
        {children}
      </body>
    </html>
  );
}
