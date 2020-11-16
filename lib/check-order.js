import { getNumberType } from "./get-number-type";
import { getNumber } from "../components/inequalities/utils";
import { GREATER_THAN } from "../constant";
import { determineInequality } from "./determine-inequality";

export const checkOrder = (acc, curr) => {
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
  } else if (determineInequality(GREATER_THAN, acc.prev, currentNumber)) {
    return { isTrue: false };
  } else {
    return {
      isTrue: true,
      prev: currentNumber,
    };
  }
};
