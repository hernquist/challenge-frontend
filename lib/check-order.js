import { getNumberType } from "./get-number-type";
import { getNumber } from "../components/inequalities/utils";
import { determineInequality } from "./determine-inequality";

export const checkOrder = (order) => (acc, curr) => {
  const numberType = getNumberType(curr.content);
  const currentNumber = getNumber(numberType, curr.content);

  if (!acc.isTrue) {
    return acc;
  }
  if (acc.prev === null) {
    return {
      isTrue: true,
      prev: currentNumber,
    };
  } else if (determineInequality(order, acc.prev, currentNumber)) {
    return { isTrue: false };
  } else {
    return {
      isTrue: true,
      prev: currentNumber,
    };
  }
};
