import { FRACTIONS, DECIMALS } from "../constant";

export const getNumberType = (number) =>
  number.includes("/") ? FRACTIONS : DECIMALS;
