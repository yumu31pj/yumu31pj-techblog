const getPathArray = (path: string): string[] => {
  // Using split('/') to split the path by / and filter(Boolean) to remove empty strings.
  const splitPath = path.split('/').filter(Boolean);
  const paths = splitPath.map((_, index) => '/' + splitPath.slice(0, index + 1).join('/') + '/');
  // Add '/' as a top page path and return this array
  return ['/'].concat(paths);
};

export default getPathArray;