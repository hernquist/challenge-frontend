import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  TOPIC,
  ENGAGEMENT,
  LEVEL,
  ASSESS,
  PRACTICE,
  EVERY,
} from "../../constant";
import {
  SelectYourOwnContainer,
  A,
  ButtonsContainer,
  LinkWrapper,
  LevelButton,
  ButtonWrapper,
  Label,
  Wrapper,
} from "./styles";
import { useStoreState, useStoreActions } from "easy-peasy";

const SelectYourOwn = () => {
  const [topic, setTopic] = useState(null);
  const [engagement, setEngagement] = useState(null);
  const [level, setLevel] = useState(null);

  const addContentMap = useStoreActions((actions) => actions.addContentMap);
  const contentMap = useStoreState((state) => state.contentMap);

  const cb = useCallback(async () => {
    addContentMap();
  }, [addContentMap]);

  useEffect(() => {
    if (contentMap.length === 0 || !contentMap) {
      cb();
    }
  }, []);

  const handleTopic = (value) => {
    setTopic(value);
    setEngagement(null);
    setLevel(null);
  };

  const handleEngagement = (value) => {
    setEngagement(value);
    setLevel(null);
  };

  const handleLevel = (value) => {
    setLevel(value);
  };

  if (contentMap.length === 0) {
    return null;
  }

  const rTopic = contentMap[topic || 0].topic;
  const rEngagement = contentMap[topic || 0].engagement[engagement || 0];
  const rLevel = level + 1;

  const route = `${rTopic}/${rEngagement}/${rLevel}`;
  const href = `/${rTopic}/${rEngagement}/[level]/[assessment]`;

  const topicName = topic === null ? "" : contentMap[topic].topic;
  const engagementName =
    topic === null || engagement === null
      ? ""
      : contentMap[topic].engagement[engagement];

  const showEngagement = Boolean(topicName);
  const showLevels = engagement !== null;
  const showAssessments = engagement !== null && level !== null;

  const currentNumberOfLevels = contentMap[topic || 0].level[engagement || 0];
  const levels = [...Array(currentNumberOfLevels)].map((_, i) => i + 1);
  const assessmentType =
    contentMap[topic || 0].assessment[engagement || 0][level || 0];

  const showPractice = assessmentType === PRACTICE || assessmentType === EVERY;
  const showAssess = assessmentType === ASSESS || assessmentType === EVERY;

  return (
    <SelectYourOwnContainer>
      <Wrapper>
        <Label>
          {TOPIC} {topicName}
        </Label>
        <ButtonWrapper>
          {contentMap.map((choice, index) => (
            <LevelButton
              key={`${choice.type}-${index}`}
              onClick={() => handleTopic(index)}
              active={index === topic}
            >
              {choice.topic}
            </LevelButton>
          ))}
        </ButtonWrapper>
      </Wrapper>

      {showEngagement && (
        <Wrapper>
          <Label>
            {ENGAGEMENT} {engagementName}
          </Label>
          <ButtonWrapper>
            {contentMap[topic || 0].engagement.map((engagementType, index) => (
              <LevelButton
                key={`${engagementType}-${index}`}
                onClick={() => handleEngagement(index)}
                active={index === engagement}
              >
                {engagementType}
              </LevelButton>
            ))}
          </ButtonWrapper>
        </Wrapper>
      )}

      {showLevels && (
        <Wrapper>
          <Label>
            {LEVEL} {level + 1}
          </Label>
          <ButtonWrapper>
            {levels.map((levelType, index) => (
              <LevelButton
                key={`${levelType}-${index}`}
                onClick={() => handleLevel(index)}
                active={index === level}
              >
                {levelType}
              </LevelButton>
            ))}
          </ButtonWrapper>
        </Wrapper>
      )}

      {showAssessments && (
        <Wrapper>
          {/* CURRENTLY ALL MODULES ARE 'every' */}
          {assessmentType === EVERY && (
            <Label>Try as practice or assessment?</Label>
          )}
          <ButtonsContainer>
            {showPractice && (
              <LinkWrapper>
                <Link href={href} as={`${route.toLowerCase()}/practice`}>
                  <A>Practice</A>
                </Link>
              </LinkWrapper>
            )}
            {showAssess && (
              <LinkWrapper>
                <Link href={href} as={`${route.toLowerCase()}/assess`}>
                  <A>Assess</A>
                </Link>
              </LinkWrapper>
            )}
          </ButtonsContainer>
        </Wrapper>
      )}
    </SelectYourOwnContainer>
  );
};

export default SelectYourOwn;
