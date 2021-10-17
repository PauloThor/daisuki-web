export const returnStars = (num: number) => {
  let output = "";
  for (let i = 1; i <= num; i++) {
    output += "⭐";
  }
  return output;
};
