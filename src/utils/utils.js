export const getImageUrl = (name) => {
  // console.log(new URL(`../assets/${name}`, import.meta.url).href)
  return new URL(`../assets/${name}`, import.meta.url).href;
};

export const getYearsArray = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 1990; year <= currentYear; year++) {
    years.push(year);
  }
  return years.reverse();
};
