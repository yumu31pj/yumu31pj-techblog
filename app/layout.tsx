import BodyWrapper from "@/_libs/components/layouts/BodyWrapper/BodyWrapper";
import HeaderBasic from "@/_libs/components/organisms/headers/HeaderBasic/HeaderBasic";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import "../_libs/scss/styles.scss";
import { SiteInfo } from "./_common/configs/siteInfo";
import { HeaderContexts } from "./_common/contexts/HeaderContexts";
import Footer from "./_common_components/Footer/Footer";

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
        />
        <main>
          {children}
        </main>
        <Footer />
      </BodyWrapper>
    </html>
  );
}
