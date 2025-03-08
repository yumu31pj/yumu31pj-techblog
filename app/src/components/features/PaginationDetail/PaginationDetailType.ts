

export type PaginationDetailType = {
  path: string,
  prev?: {
    id: string,
    title: string,
  },
  next?: {
    id: string,
    title: string,
  }
};
