import { PortfolioContactForm } from "../../common/PortfolioContactForm/PortfolioContactForm"
import { PortfolioSectionContainer } from "../../common/PortfolioSectionContainer/PortfolioSectionContainer"
import { PortfolioSectionTitle } from "../../common/PortfolioSectionTitle/PortfolioSectionTitle"

export const PortfolioHomeContact = () => {
  return (
    <PortfolioSectionContainer id="contact" marginTop={"70-130"}>
      <PortfolioSectionTitle title={"Contact"} />
      <PortfolioContactForm />
    </PortfolioSectionContainer>
  )
}