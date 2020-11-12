import { useState, useEffect } from "react";
import { number, arrayOf, string, shape, bool, func, object } from "prop-types";
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
import noop from "lodash/noop";

const Inequalities = ({
  module,
  route,
  error,
  loading,
  clearError,
  savePracticeHandler,
}) => {
  // state
  const [order, setOrder] = useState(getRandomInt(2));
  const content = get(module, "content");
  const numberOfTurns = get(module, "numberOfTurns", 5);
  const { topic, engagement, level, assessment } = readRoute(route);

  const getContent = (side) => {
    const index =
      (side === LEFT && !!order) || (side === RIGHT && !order) ? 0 : 1;
    return content[index].list[getRandomInt(content[index].list.length)];
  };

  const getTopic = (side) => {
    const index =
      (side === LEFT && !!order) || (side === RIGHT && !order) ? 0 : 1;
    return content[index].type;
  };

  const [leftContent, setLeftContent] = useState(getContent(LEFT));
  const [rightContent, setRightContent] = useState(getContent(RIGHT));
  const [leftTopic, setLeftTopic] = useState(getTopic(LEFT));
  const [rightTopic, setRightTopic] = useState(getTopic(RIGHT));
  const [gameHistory, updateGameHistory] = useState([]);
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [numberOfCorrect, setNumberOfCorrect] = useState(0);

  const setNewFractions = () => {
    setLeftContent(getContent(LEFT));
    setRightContent(getContent(RIGHT));
    setLeftTopic(getTopic(LEFT));
    setRightTopic(getTopic(RIGHT));
  };

  const reset = () => {
    setNumberOfAttempts(0);
    setNumberOfCorrect(0);
    updateGameHistory([]);
  };

  // updates
  useEffect(() => {
    setNewFractions();
  }, [numberOfAttempts]);

  useEffect(() => {
    if (leftContent === rightContent) {
      setNewFractions();
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
          assessmentType: assessment,
        },
      });
    }
  }, [roundOver]);

  const checkAnswer = (equality) => {
    const firstNumber = getNumber(leftTopic, leftContent);
    const secondNumber = getNumber(rightTopic, rightContent);

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

  const lessThan = () => checkAnswer("lessThan");
  const greaterThan = () => checkAnswer("greaterThan");
  const equalTo = () => checkAnswer("equalTo");

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
    <Recap
      gameHistory={gameHistory}
      numberOfCorrect={numberOfCorrect}
      numberOfAttempts={numberOfAttempts}
      reset={reset}
    />
  ) : (
    <ContentContainer>
      {loading && <h1>Loading...</h1>}
      <InequalityCards>
        <LargeCard content={leftContent} topic={leftTopic} />
        <LargeSymbolCardsContainer>
          <LargeSymbolCard onClick={lessThan}>{`<`}</LargeSymbolCard>
          <LargeSymbolCard onClick={greaterThan}>{`>`}</LargeSymbolCard>
          <LargeSymbolCard onClick={equalTo}>=</LargeSymbolCard>
        </LargeSymbolCardsContainer>
        <LargeCard content={rightContent} topic={rightTopic} />
      </InequalityCards>
    </ContentContainer>
  );
};

Inequalities.propTypes = {
  module: shape({
    numberOfTurns: number,
    slug: string.isRequired,
    content: arrayOf(
      shape({
        _id: string.isRequired,
        name: string.isRequired,
        type: string.isRequired,
        list: arrayOf(string),
      })
    ),
  }),
  route: string.isRequired,
  error: object,
  loading: bool,
  clearError: func,
  savePracticeHandler: func,
};

Inequalities.defaultProps = {
  clearError: noop,
  savePracticeHandler: noop,
};

export default Inequalities;
