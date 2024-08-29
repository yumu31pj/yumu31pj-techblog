const getModifiedImgPathOfRichEditor = (content: string) => {
  const replacedContent = content.replace(
    /"(https?:\/\/images\.microcms-assets\.io\/.+?\.(jpe?g|gif|png))"/g,
    '"$1?fm=webp"'
  );

  return replacedContent;
}

export default getModifiedImgPathOfRichEditor;