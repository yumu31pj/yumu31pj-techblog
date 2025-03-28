import type { PortfolioNavigationProps } from "../_components/common/PortfolioNavigation/PortfolioNavigation";

export const PortfolioNavigationContexts: PortfolioNavigationProps = {
  navItems: {
    linkItems: [
      {
        title: "About",
        linkTo: "/reproduce/7-portfolio/about"
      },
      {
        title: "Works",
        linkTo: "/reproduce/7-portfolio/works",
      },
      {
        title: "News",
        linkTo: "/reproduce/7-portfolio/news",
      },
      {
        title: "Contact",
        linkTo: "/reproduce/7-portfolio/#contact"
      }
    ],
    instagramURL: "https://instagram.com"
  }
}