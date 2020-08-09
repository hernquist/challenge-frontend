import { LFC, Numerator, Denominator } from "./styles";
import { getNumerator, getDenominator } from "../../lib/get-numerator";

const LargeFractionCard = ({ fraction }) => (
  <LFC>
    <Numerator>{getNumerator(fraction)}</Numerator>
    <Denominator>{getDenominator(fraction)}</Denominator>
  </LFC>
);

export default LargeFractionCard;
