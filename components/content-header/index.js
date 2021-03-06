import { readRoute } from "../../lib/read-route";
import { Container, Question, Topic, Correct } from "./styles";

const ContentHeader = ({
  asPath,
  inPracticeMode,
  numberOfTurns,
  numberOfAttempts,
  numberOfCorrect,
  desktopColumnStyle,
}) => {
  const { topic, engagement, level } = readRoute(asPath);

  return (
    <Container desktopColumnStyle={desktopColumnStyle}>
      <Topic>{topic}</Topic>
      <div>{engagement}</div>
      <div>Level {level}</div>
      <Question>
        Question {numberOfAttempts + 1} of {numberOfTurns}
      </Question>
      {inPracticeMode && <Correct>{numberOfCorrect} correct</Correct>}
    </Container>
  );
};

export default ContentHeader;
