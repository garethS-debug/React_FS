export const getImagegUrl = (path) => {
    return new URL(`../assets/${path}`, import.meta.url).href;
};