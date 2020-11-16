import { LESS_THAN, GREATER_THAN, EQUAL_TO } from "../constant";

export const determineInequality = (equality, firstNumber, secondNumber) => {
  if (equality === LESS_THAN && firstNumber < secondNumber) {
    return true;
  }

  if (equality === LESS_THAN && firstNumber >= secondNumber) {
    return false;
  }

  if (equality === GREATER_THAN && firstNumber > secondNumber) {
    return true;
  }

  if (equality === GREATER_THAN && firstNumber <= secondNumber) {
    return false;
  }

  if (equality === EQUAL_TO && firstNumber == secondNumber) {
    return true;
  }

  if (equality === EQUAL_TO && firstNumber != secondNumber) {
    return false;
  }

  console.error("Did not solve equality");
  return false;
};
