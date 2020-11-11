import { useState, useEffect } from "react";
import { number, arrayOf, string } from "prop-types";
import { determineInequality } from "../../lib/determine-inequality";
import { getRandomInt } from "../../lib/get-random-int";
import LargeCard from "../cards/large-card";
import {
  ContentContainer,
  InequalityCards,
  LargeSymbolCardsContainer,
  LargeSymbolCard,
} from "../symbols/styles";
import { readRoute } from "../../lib/read-route";
import Recap from "../recap";
import Error from "../error";
import { LEFT, RIGHT } from "../../constant";
import get from "lodash/get";
import { getNumber } from "./utils";

const Inequalities = ({
  module,
  route,
  error,
  loading,
  clearError,
  savePracticeHandler,
}) => {
  const [order, setOrder] = useState(getRandomInt(2));
  const content = get(module, "content");
  const numberOfTurns = get(module, "numberOfTurns", 5);
  const { topic, engagement, level } = readRoute(route);

  const getContent = (side) => {
    const index =
      (side === LEFT && !!order) || (side === RIGHT && !order) ? 0 : 1;
    return content[index].list[getRandomInt(content[index].list.length)];
  };

  const [leftContent, setLeftContent] = useState(getContent(LEFT));
  const [rightContent, setRightContent] = useState(getContent(RIGHT));
  const [gameHistory, updateGameHistory] = useState([]);

  const setNewFractions = () => {
    setLeftContent(getContent(LEFT));
    setRightContent(getContent(RIGHT));
  };

  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [numberOfCorrect, setNumberOfCorrect] = useState(0);

  useEffect(() => {
    setNewFractions();
  }, [numberOfAttempts]);

  useEffect(() => {
    if (leftContent === rightContent) {
      setLeftContent(getContent(LEFT));
      setRightContent(getContent(RIGHT));
    }
  });

  const roundOver = numberOfTurns <= numberOfAttempts;

  useEffect(() => {
    if (roundOver) {
      savePracticeHandler({
        practice: {
          completedOn: new Date(),
          topic,
          engagement,
          level: Number(level),
          totalQuestion: numberOfAttempts,
          totalCorrect: numberOfCorrect,
          score: numberOfCorrect / numberOfAttempts,
          // gameHistory,
        },
      });
    }
  }, [roundOver]);

  const checkAnswer = (equality) => {
    const firstNumber = getNumber(topic, leftContent);
    const secondNumber = getNumber(topic, rightContent);

    const correct = determineInequality(equality, firstNumber, secondNumber);
    const round = {
      leftContent,
      equality,
      rightContent,
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
    <ContentContainer>
      {loading && <h1>Loading...</h1>}
      <InequalityCards>
        <LargeCard content={leftContent} topic={topic} />
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
        <LargeCard content={rightContent} topic={topic} />
      </InequalityCards>
    </ContentContainer>
  );
};

Inequalities.propTypes = {};

Inequalities.defaultProps = {};

export default Inequalities;
