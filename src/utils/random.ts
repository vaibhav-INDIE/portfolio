export const random = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};