import { useState } from "react";
import Link from "next/link";
import {
  COMPARE,
  ORDER,
  DECIMALS,
  FRACTIONS,
  ONE,
  TWO,
  PRACTICE_ONLY,
  EVERY,
  FIVE,
  DECIMALS_VS_FRACTIONS,
  TOPIC,
  ENGAGEMENT,
  LEVEL,
} from "../../constant";
import {
  DashboardContainer,
  A,
  ButtonsContainer,
  LinkWrapper,
  LevelButton,
  ButtonWrapper,
  Label,
  Wrapper,
} from "./styles";
import { useRouter } from "next/dist/client/router";

const choices = [
  {
    topic: FRACTIONS,
    engagement: [COMPARE, ORDER],
    level: [FIVE, TWO],
    assessment: [
      [EVERY, EVERY, EVERY, EVERY, EVERY],
      [EVERY, PRACTICE_ONLY],
    ],
  },
  {
    topic: DECIMALS,
    engagement: [COMPARE, ORDER],
    level: [TWO, ONE],
    assessment: [[EVERY, EVERY], [EVERY]],
  },
  {
    topic: DECIMALS_VS_FRACTIONS,
    engagement: [COMPARE],
    level: [TWO],
    assessment: [[EVERY, EVERY]],
  },
];

const Dashboard = () => {
  const router = useRouter();
  const [topic, setTopic] = useState(null);
  const [engagement, setEngagement] = useState(null);
  const [level, setLevel] = useState(null);
  const [assessment, setAssessment] = useState(null);

  const handleTopic = (value) => {
    setTopic(value);
    setEngagement(null);
    setLevel(null);
    setAssessment(null);
  };

  const handleEngagement = (value) => {
    setEngagement(value);
    setLevel(null);
    setAssessment(null);
  };

  const handleLevel = (value) => {
    setLevel(value);
    setAssessment(null);
  };

  const rTopic = choices[topic || 0].topic;
  const rEngagement = choices[topic || 0].engagement[engagement || 0];
  const rLevel = choices[topic || 0].level[engagement || 0][level || 0];

  const route = `${rTopic}/${rEngagement}/${rLevel}`;
  const href = `/${rTopic}/${rEngagement}/[level]/[assessment]`;

  const topicName = topic === null ? "" : choices[topic].topic;
  const engagementName =
    topic === null || engagement === null
      ? ""
      : choices[topic].engagement[engagement];

  const showEngagement = Boolean(topicName);
  const showLevels = engagement !== null;
  const showAssessments = engagement !== null && level !== null;

  return (
    <DashboardContainer>
      <Wrapper>
        <Label>
          {TOPIC} {topicName}
        </Label>
        <ButtonWrapper>
          {choices.map((choice, index) => (
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
            {choices[topic || 0].engagement.map((engagementType, index) => (
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
            {choices[topic || 0].level[engagement || 0].map(
              (levelType, index) => (
                <LevelButton
                  key={`${levelType}-${index}`}
                  onClick={() => handleLevel(index)}
                  active={index === level}
                >
                  {levelType}
                </LevelButton>
              )
            )}
          </ButtonWrapper>
        </Wrapper>
      )}

      {showAssessments && (
        <Wrapper>
          <Label>Try as practice or assessment?</Label>
          <ButtonsContainer>
            <LinkWrapper>
              <Link href={href} as={`${route.toLowerCase()}/practice`}>
                <A>Practice</A>
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <Link href={href} as={`${route.toLowerCase()}/assess`}>
                <A>Assess</A>
              </Link>
            </LinkWrapper>
          </ButtonsContainer>
        </Wrapper>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
