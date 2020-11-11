import { FRACTIONS, DECIMALS } from "../../constant";
import { create, all } from "mathjs";

const math = create(all, {});

export const getNumber = (topic, content) => {
  if (topic === FRACTIONS) {
    return math.number(math.fraction(content));
  }
  if (topic === DECIMALS) {
    return Number(content);
  }
};
