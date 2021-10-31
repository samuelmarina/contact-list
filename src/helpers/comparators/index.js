export const nameComparator = (a, b) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
};
