import Link from "next/link";
import { Pie } from "react-chartjs";
import { useRouter } from "next/router";
import { get } from "lodash";
import {
  RecapContainer,
  Scores,
  Score,
  Question,
  ReviewATag as A,
  TitleContainer,
  Title,
  RecapList,
  BottomNav,
  Reset,
} from "./styles";
import { Numerator, Denominator } from "../cards/styles";
import { getNumerator, getDenominator } from "../../lib/get-numerator";
import styles from "../../styles/theme";
import { isMobile } from "../../lib/is-mobile";
import { GREATER_THAN } from "../../constant";
import { number, array, func } from "prop-types";

const Recap = ({
  numberOfCorrect,
  numberOfAttempts,
  gameHistory = [],
  reset,
}) => {
  const router = useRouter();
  const fraction = `${numberOfCorrect}/${numberOfAttempts}`;
  const decimalScore = numberOfCorrect / numberOfAttempts;

  const getAsForRecap = (path) => {
    const isPractice = path.includes("practice");
    const piecesOfPath = path
      .split("/")
      .filter((piece) => piece)
      .map((piece) => (piece === "practice" ? "assess" : piece))
      .join("/");

    return [`/${piecesOfPath}`, isPractice];
  };

  const href = get(router, "route", "");
  const asPath = get(router, "asPath", "");

  const [as, isPractice] = getAsForRecap(asPath);

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

  const circleDimensions = isMobile()
    ? {
        height: 60,
        width: 60,
      }
    : {
        height: 100,
        width: 100,
      };

  return (
    <RecapContainer>
      <TitleContainer>
        <Title>Your Score</Title>
      </TitleContainer>
      <Scores>
        <Score>
          <Numerator style={{ padding: "0" }}>
            {getNumerator(fraction)}
          </Numerator>
          <Denominator style={{ padding: "0" }}>
            {getDenominator(fraction)}
          </Denominator>
        </Score>
        =<Score>{decimalScore.toFixed(2)}</Score>=
        <Score>{(decimalScore.toFixed(2) * 100).toFixed(0)}%</Score>
        <Pie
          data={pieData}
          width={circleDimensions.width}
          height={circleDimensions.height}
        />
      </Scores>
      <RecapList>
        {gameHistory.map((round, i) =>
          round.list ? (
            <Question key={i} correct={round.correct}>
              {round.order === GREATER_THAN ? (
                <span>{`\u2197`}</span>
              ) : (
                <span>{`\u2198`}</span>
              )}
              {round.list.map((item) => (
                <span>
                  {item.content}
                  {` `}
                </span>
              ))}
              {round.correct ? <span> &#10003;</span> : <span> &#10007;</span>}
            </Question>
          ) : (
            <Question key={i} correct={round.correct}>
              {round.leftContent}
              {` `}is{` `}
              {round.equality.replace(/([A-Z])/g, " $1").toLowerCase()}
              {` `}
              {round.rightContent}
              {round.correct ? <span> &#10003;</span> : <span> &#10007;</span>}
            </Question>
          )
        )}
      </RecapList>
      <BottomNav>
        <div>
          <Link href="/">
            <A>BACK TO DASHBOARD</A>
          </Link>
        </div>
        <div>
          <Reset onClick={reset}>TRY AGAIN</Reset>
        </div>
        {isPractice && (
          <div>
            <Link href={href} as={as}>
              <A onClick={reset}>TAKE ASSESSMENT</A>
            </Link>
          </div>
        )}
      </BottomNav>
    </RecapContainer>
  );
};

Recap.propTypes = {
  numberOfCorrect: number.isRequired,
  numberOfAttempts: number.isRequired,
  gameHistory: array,
  reset: func.isRequired,
};

Recap.defaultProps = {
  gameHistory: [],
};

export default Recap;
