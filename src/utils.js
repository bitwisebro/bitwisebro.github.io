export const getImageUrl = (path) => {
  if(path.startsWith("https")) {
    return path
  }
  return new URL(`/assets/${path}`, import.meta.url).href;
};
