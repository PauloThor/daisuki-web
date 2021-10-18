export const returnStars = (num: number) => {
  num = Math.ceil(num);
  let output = "";
  for (let i = 1; i <= num; i++) {
    output += "⭐";
  }
  return output;
};
