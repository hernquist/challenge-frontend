import { useState, useEffect } from "react";
import { number, arrayOf, string } from "prop-types";
import { create, all } from "mathjs";
import { determineInequality } from "../../lib/determine-inequality";
import { getRandomInt } from "../../lib/get-random-int";
import LargeFractionCard from "../fraction-cards/large-fraction-card";
import {
  InequalityContainer,
  InequalityCards,
  LargeSymbolCardsContainer,
  LargeSymbolCard,
} from "../symbols/styles";
import { readRoute } from "../../lib/read-route";
import Recap from "../recap";
import Error from "../error";
import { LEFT, RIGHT } from "../../constant";
import get from "lodash/get";

const math = create(all, {});

const Inequalities = ({
  module,
  route,
  error,
  loading,
  clearError,
  savePracticeHandler,
}) => {
  const [order, setOrder] = useState(getRandomInt(2));
  const fractions = get(module, "content");
  const numberOfTurns = get(module, "numberOfTurns", 5);

  const getFraction = (side) => {
    const index =
      (side === LEFT && !!order) || (side === RIGHT && !order) ? 0 : 1;
    return fractions[index].list[getRandomInt(fractions[index].list.length)];
  };

  const [leftFraction, setLeftFraction] = useState(getFraction(LEFT));
  const [rightFraction, setRightFraction] = useState(getFraction(RIGHT));
  const [gameHistory, updateGameHistory] = useState([]);

  const setNewFractions = () => {
    setLeftFraction(getFraction(LEFT));
    setRightFraction(getFraction(RIGHT));
  };

  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [numberOfCorrect, setNumberOfCorrect] = useState(0);

  useEffect(() => {
    setNewFractions();
  }, [numberOfAttempts]);

  useEffect(() => {
    if (leftFraction === rightFraction) {
      setLeftFraction(getFraction(LEFT));
      setRightFraction(getFraction(RIGHT));
    }
  });

  const roundOver = numberOfTurns <= numberOfAttempts;

  const { topic, engagement, level } = readRoute(route);

  useEffect(() => {
    if (roundOver) {
      savePracticeHandler({
        variables: {
          practice: {
            completedOn: new Date(),
            topic,
            engagement,
            level: Number(level),
            totalQuestion: numberOfAttempts,
            totalCorrect: numberOfCorrect,
            score: numberOfCorrect / numberOfAttempts,
          },
        },
      });
    }
  }, [roundOver]);

  const checkAnswer = (equality) => {
    const firstNumber = math.number(math.fraction(leftFraction));
    const secondNumber = math.number(math.fraction(rightFraction));

    const correct = determineInequality(equality, firstNumber, secondNumber);
    const round = {
      leftFraction,
      equality,
      rightFraction,
      correct,
      numberOfAttempts: numberOfAttempts + 1,
      numberOfCorrect: numberOfCorrect + correct,
    };

    updateGameHistory([...gameHistory, round]);
    setNumberOfAttempts(numberOfAttempts + 1);
    setNumberOfCorrect(numberOfCorrect + correct);
    setOrder(getRandomInt(2));
  };

  if (!!error.message) {
    return (
      <Error
        visible={true}
        message={error.message}
        buttonMessage="CONTINUE"
        clearError={clearError}
      />
    );
  }

  return roundOver ? (
    <>
      <Recap
        gameHistory={gameHistory}
        numberOfCorrect={numberOfCorrect}
        numberOfAttempts={numberOfAttempts}
      />
    </>
  ) : (
    <InequalityContainer>
      {loading && <h1>Loading...</h1>}
      <InequalityCards>
        <LargeFractionCard fraction={leftFraction} />
        <LargeSymbolCardsContainer>
          <LargeSymbolCard
            onClick={() => checkAnswer("lessThan")}
          >{`<`}</LargeSymbolCard>
          <LargeSymbolCard
            onClick={() => checkAnswer("greaterThan")}
          >{`>`}</LargeSymbolCard>
          <LargeSymbolCard onClick={() => checkAnswer("equalTo")}>
            =
          </LargeSymbolCard>
        </LargeSymbolCardsContainer>
        <LargeFractionCard fraction={rightFraction} />
      </InequalityCards>
    </InequalityContainer>
  );
};

Inequalities.propTypes = {};

Inequalities.defaultProps = {};

export default Inequalities;
