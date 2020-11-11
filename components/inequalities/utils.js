import { FRACTIONS, DECIMALS } from "../../constant";
import { create, all } from "mathjs";

const math = create(all, {});

export const getNumber = (contentTopic, content) => {
  if (contentTopic === FRACTIONS) {
    return math.number(math.fraction(content));
  }
  if (contentTopic === DECIMALS) {
    return Number(content);
  }
};
