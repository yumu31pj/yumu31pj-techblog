import { Outlet } from "react-router";
import "../app/src/sass/styles.scss";
import type { Route } from "./+types/root";
import Footer from "./src/components/layouts/Footer/Footer";
import Header from "./src/components/layouts/Header/Header";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Noto+Sans+JP:wght@100..900&family=Zen+Old+Mincho&display=swap",
  },
];

const SiteBaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default SiteBaseLayout;