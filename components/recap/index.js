import Link from "next/link";
import { Pie } from "react-chartjs";
import {
  RecapContainer,
  Scores,
  Score,
  Question,
  ReviewATag as A,
  TitleContainer,
  Title,
} from "./styles";
import { Numerator, Denominator } from "../fraction-cards/styles";
import { getNumerator, getDenominator } from "../../lib/get-numerator";
import styles from "../../styles/theme";

const Recap = ({ numberOfCorrect, numberOfAttempts, gameHistory = [] }) => {
  const fraction = `${numberOfCorrect}/${numberOfAttempts}`;
  const decimalScore = numberOfCorrect / numberOfAttempts;

  const pieData = [
    {
      value: numberOfCorrect,
      color: styles.color.atol,
    },
    {
      value: numberOfAttempts - numberOfCorrect,
      color: styles.color.pomengranate,
    },
  ];

  return (
    <RecapContainer>
      <TitleContainer>
        <Title>Your Score</Title>
        <Link href="/">
          <A>BACK TO DASHBOARD</A>
        </Link>
      </TitleContainer>
      <Scores>
        <Score style={{ fontSize: "3rem" }}>
          <Numerator style={{ padding: "0" }}>
            {getNumerator(fraction)}
          </Numerator>
          <Denominator style={{ padding: "0" }}>
            {getDenominator(fraction)}
          </Denominator>
        </Score>
        =<Score>{decimalScore.toFixed(2)}</Score>=
        <Score>{(decimalScore.toFixed(2) * 100).toFixed(0)}%</Score>
        <Pie data={pieData} width="100" height="100" />
      </Scores>
      {gameHistory.map((round, i) => (
        <Question key={i} correct={round.correct}>
          {round.leftFraction}
          {` `}
          {round.equality.replace(/([A-Z])/g, " $1").toLowerCase()}
          {` `}
          {round.rightFraction}
          {round.correct ? <span> &#10003;</span> : <span> &#10007;</span>}
        </Question>
      ))}
    </RecapContainer>
  );
};

export default Recap;