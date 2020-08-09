export const determineInequality = (equality, firstNumber, secondNumber) => {
  if (equality === "lessThan" && firstNumber < secondNumber) {
    return true;
  }

  if (equality === "lessThan" && firstNumber >= secondNumber) {
    return false;
  }

  if (equality === "greaterThan" && firstNumber > secondNumber) {
    return true;
  }

  if (equality === "greaterThan" && firstNumber <= secondNumber) {
    return false;
  }

  if (equality === "equalTo" && firstNumber == secondNumber) {
    return true;
  }

  if (equality === "equalTo" && firstNumber != secondNumber) {
    return false;
  }

  console.error("Did not solve equality");
  return false;
};
