import { Numerator, Denominator } from "../cards/styles";
import { getNumerator, getDenominator } from "../../lib/get-numerator";
import { FRACTIONS, DECIMALS } from "../../constant";
import { get } from "lodash";

export const CardType = ({ item, numberType }) => {
  const content = get(item, "content", "");

  if (numberType === FRACTIONS) {
    return (
      <>
        <Numerator style={{ padding: "0.1rem" }}>
          {getNumerator(content)}
        </Numerator>
        <Denominator style={{ padding: "0.1rem" }}>
          {getDenominator(content)}
        </Denominator>
      </>
    );
  }

  if (numberType === DECIMALS) {
    return <div style={{ textAlign: "center" }}>{content}</div>;
  }

  return null;
};
