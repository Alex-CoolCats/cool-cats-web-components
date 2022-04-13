export * from "./config";

export const simpleSlug = (str: string) => {
  return str.replace( /[\u0300-\u036f]/g, '' )   // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export const getSizes = () => {
  return ["tiny", "small", "medium", "normal", "large", "xlarge", "massive"];
}
