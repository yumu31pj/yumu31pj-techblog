
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import BodyWrapper from "./_libs/components/layouts/BodyWrapper/BodyWrapper";
import HeaderBasic from "./_libs/components/organisms/headers/HeaderBasic/HeaderBasic";
import "./_libs/scss/styles.scss";
import { HeaderContexts } from "./_src/_common/contexts/HeaderContexts";
import { SiteInfo } from "./_src/configs/siteInfo";
import Footer from "./_src/Footer/Footer";

export const metadata: Metadata = {
  title: SiteInfo.siteTitle,
  description: SiteInfo.siteDescription,
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
      <BodyWrapper>
      <HeaderBasic
          logoImageItem={
            HeaderContexts.logoImageItem
          }
          topLinkUrl={HeaderContexts.topLinkUrl}
        />
        <main>
          {children}
        </main>
        <Footer />
      </BodyWrapper>
    </html>
  );
}
