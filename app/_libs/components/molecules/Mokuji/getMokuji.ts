import { MokujiItemType, MokujiListType } from "./Mokuji.types";

const getMokuji = (content: string): MokujiListType => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const headings = doc.querySelectorAll("h1, h2, h3");

  const mokujiList: MokujiItemType[] = [];

  headings.forEach((heading, index) => {
    const level = heading.tagName.toLowerCase().replace("h", "");
    const id = heading.getAttribute("id");
    const text = heading.innerHTML; // テキストとHTML要素を含む全体を取得

    mokujiList.push({
      tagType: `h${level}`,
      title: text,
      linkTo: `#${id}`,
    });
  });

  return { mokujiList };
};

export default getMokuji;
