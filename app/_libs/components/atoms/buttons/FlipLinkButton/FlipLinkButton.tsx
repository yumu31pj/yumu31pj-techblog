import { LinkItemType } from "@/_libs/types/LinkItem.types";
import styles from "./FlipLinkButton.module.scss";

const FlipLinkButton = (props: LinkItemType) => {
  const {linkText, linkTo} = props;
  return (
    <a href={linkTo} className={styles['flip-link-button']}>
      <span>{linkText}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 12 16">
        <path d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538407 5.31946 0.538407 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8 4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM1 7C0.447715 7 0 7.44771 0 8C0 8.55228 0.447715 9 1 9V7ZM12 7H1V9H12V7Z"></path>
      </svg>
    </a>
  )
}

export default FlipLinkButton;