import { useState, useEffect } from "react";
import {
  ContentContainer,
  InequalityCards,
  LargeSymbolCardsContainer,
  LargeSymbolCard,
} from "../symbols/styles";
import LargeFractionCard from "../fraction-cards/large-fraction-card";
import get from "lodash/get";
import { getRandomInt } from "../../lib/get-random-int";
import { LEFT, RIGHT } from "../../constant";
import { determineInequality } from "../../lib/determine-inequality";
import { eq } from "lodash";
import { readRoute } from "../../lib/read-route";
import Recap from "../recap";
import Error from "../error";

const Decimals = ({
  route,
  clearError,
  error,
  loading,
  module,
  savePracticeHandler,
}) => {
  const [order, setOrder] = useState(getRandomInt(2));
  const decimals = get(module, "content");
  const numberOfTurns = get(module, "numberOfTurns", 5);

  const getDecimal = (side) => {
    const index =
      (side === LEFT && !!order) || (side === RIGHT && !order) ? 0 : 1;
    return decimals[index].list[getRandomInt(decimals[index].list.length)];
  };

  const [leftContent, setLeftContent] = useState(getDecimal(LEFT));
  const [rightContent, setRightContent] = useState(getDecimal(RIGHT));
  const [gameHistory, updateGameHistory] = useState([]);

  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [numberOfCorrect, setNumberOfCorrect] = useState(0);

  const setNewContent = () => {
    setLeftContent(getDecimal(LEFT));
    setRightContent(getDecimal(RIGHT));
  };

  useEffect(() => {
    setNewContent();
  }, [numberOfAttempts]);

  useEffect(() => {
    if (leftContent === rightContent) {
      setLeftContent(getDecimal(LEFT));
      setRightContent(getDecimal(RIGHT));
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
    const firstNumber = Number(leftContent);
    const secondNumber = Number(rightContent);

    const correct = determineInequality(equality, firstNumber, secondNumber);
    const round = {
      leftContent,
      equality,
      rightContent,
      correct,
      numberOfAttempts: numberOfAttempts + 1,
      numberOfCorrect: numberOfCorrect + correct,
    };

    console.log(correct);

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
    <ContentContainer>
      {loading && <h1>Loading...</h1>}
      <InequalityCards>
        <div style={{ fontSize: "48px" }}>{leftContent}</div>
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
        <div style={{ fontSize: "48px" }}>{rightContent}</div>
      </InequalityCards>
    </ContentContainer>
  );
};

export default Decimals;
