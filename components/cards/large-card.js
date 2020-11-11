import { LargeCardContainer, Numerator, Denominator } from "./styles";
import { getNumerator, getDenominator } from "../../lib/get-numerator";
import { FRACTIONS } from "../../constant";

const LargeCard = ({ topic, content }) => {
  if (topic === FRACTIONS) {
    return (
      <LargeCardContainer topic={topic}>
        <Numerator>{getNumerator(content)}</Numerator>
        <Denominator>{getDenominator(content)}</Denominator>
      </LargeCardContainer>
    );
  }

  return <LargeCardContainer topic={topic}>{content}</LargeCardContainer>;
};

export default LargeCard;
