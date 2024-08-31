const getOffset = (pageNumber: number, postsPerPage: number) => {
  // 1ページ目のときはoffsetは0から開始
  let offset = 0;
  
  if(pageNumber > 1) {
    offset = (pageNumber - 1) * postsPerPage
  }
  return offset;
}

export default getOffset;