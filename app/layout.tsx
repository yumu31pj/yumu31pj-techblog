import BodyWrapper from "@/_libs/components/layouts/BodyWrapper/BodyWrapper";
import type { Metadata } from "next";
import "../_libs/scss/styles.scss";
import Footer from "./_common_components/Footer/Footer";
import Header from "./_common_components/Header/Header";
import { SiteInfo } from "./_configs/siteInfo";

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
      <BodyWrapper>
       <Header />
        <main>
          {children}
        </main>
        <Footer />
      </BodyWrapper>
    </html>
  );
}
