import { Numerator, Denominator } from "../cards/styles";
import { getNumerator, getDenominator } from "../../lib/get-numerator";
import { getNumberType } from "../../lib/get-number-type";
import { FRACTIONS, DECIMALS } from "../../constant";
import { get } from "lodash";

export const CardType = ({ item }) => {
  const content = get(item, "content", "");
  const topic = getNumberType(content);

  if (topic === FRACTIONS) {
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

  if (topic === DECIMALS) {
    return <>{content}</>;
  }

  return null;
};
