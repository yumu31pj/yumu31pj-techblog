import parse from "html-react-parser";
import DivContentsWrapper from "~/src/components/layouts/DivContentsWrapper/DivContentsWrapper";
import SimpleTitle from "~/src/components/parts/titles/SimpleTitle/SimpleTitle";
import styles from "./ComponentBox.module.scss";

export type ComponentBoxProps = {
  title: string;
  component: React.ReactNode;
  explanation: string;
  linkTo?: string;
}

const ComponentBox = (props: ComponentBoxProps) => {
  const {title, component, explanation, linkTo} = props;
  return (
    <DivContentsWrapper>
      <SimpleTitle text={title} tag={"h3"} />
      <div className={styles['component-box-container']}>
        <div className={styles['component-box-display']}>
          {component}
        </div>
        <div className={styles['component-box-detail']}>
          <p>{parse(explanation)}</p>
          {linkTo &&
            <a href={linkTo}>使い方はこちら</a>
          }
        </div>
      </div>
    </DivContentsWrapper>
  )
}

export default ComponentBox;