import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import GTMBody from "~/src/components/features/GTM/GTMBody";
import GTMHead from "~/src/components/features/GTM/GTMHead";
import Footer from "~/src/components/layouts/Footer/Footer";
import Header from "~/src/components/layouts/Header/Header";
import { GTMTagID } from "~/src/configs/SiteInfo";
import type { Route } from "./+types/root";
import "./src/sass/styles.scss";

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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <GTMHead id={GTMTagID} />
      </head>
      <body>
        <GTMBody id={GTMTagID} />
        <Header />  
        {/* <MainContainer> */}
          {children}
        {/* </MainContainer> */}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <>
    </>
  );
}
