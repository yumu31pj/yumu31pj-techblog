import { NumberList, type NumberListType } from "../NumberList/NumberList";
import { Photobook2SectionContainer } from "../Photobook2SectionContainer/Photobook2SectionContainer";
import { Photobook2SectionTitle } from "../Photobook2SectionTitle/Photobook2SectionTitle";
import styles from "./Photobook2SectionIndex.module.scss";

export const Photobook2SectionIndex = (props: NumberListType) => {
  const {listItem} = props;

  return (
    <Photobook2SectionContainer id={"index"}bgColorType={"gray"}>
      <Photobook2SectionTitle title="index" />
      <div className={styles['c-index']}>
        <NumberList listItem={listItem} />
      </div>
    </Photobook2SectionContainer>
  )
}