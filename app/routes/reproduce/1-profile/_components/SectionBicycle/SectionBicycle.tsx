import { BicycleCard, type BicycleCardProps, } from "../BicycleCard/BicycleCard";
import { HomeSectionTitle } from "../HomeSectionTitle/HomeSectionTitle";
import { SectionContainer } from "../SectionContainer/SectionContainer";
import { SectionBicycleContext } from "./SectionBicycle.context";
import styles from "./SectionBicycle.module.scss";

export const SectionBicycle = () => {

  const bicycleData: BicycleCardProps[] = SectionBicycleContext;

  return (
    <SectionContainer id={"bicyle"} paddingTop={100}>
      <HomeSectionTitle text="Bicycle" />
      {bicycleData ? (
        <div className={styles['c-articles']}>
          {bicycleData.map((card: BicycleCardProps, key: number) => (
            <div key={key} className={styles['c-articles__item']}>
              <BicycleCard
                imageItem={card.imageItem}
                title={card.title}
                text={card.text}
                linkTo={card.linkTo}
              />
            </div>
          ))}
        </div>
      ) : (
        null
      )}
    </SectionContainer>
  ) 
}