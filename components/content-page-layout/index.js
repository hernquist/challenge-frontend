import { DesktopTopic, ContentPageWrapper, ContentContainer } from "./styles";
import Recap from "../recap";
import Error from "../error";
import ContentHeader from "../content-header";

const ContentPageLayout = (props) => {
  const {
    loading,
    topic,
    asPath,
    inPracticeMode,
    numberOfAttempts,
    numberOfCorrect,
    numberOfTurns,
    roundOver,
    gameHistory,
    reset,
    children,
    errorMessage,
    clearError,
    desktopColumnStyle,
  } = props;

  if (!!errorMessage) {
    return (
      <Error
        visible
        message={errorMessage}
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
    <ContentPageWrapper>
      <DesktopTopic>{topic}</DesktopTopic>
      <ContentContainer desktopColumnStyle={desktopColumnStyle}>
        {loading && <h1>Loading...</h1>}
        <ContentHeader
          asPath={asPath}
          inPracticeMode={inPracticeMode}
          numberOfTurns={numberOfTurns}
          numberOfAttempts={numberOfAttempts}
          numberOfCorrect={numberOfCorrect}
          desktopColumnStyle={desktopColumnStyle}
        />
        {children}
      </ContentContainer>
    </ContentPageWrapper>
  );
};

export default ContentPageLayout;
