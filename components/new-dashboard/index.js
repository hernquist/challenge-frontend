import { useState } from "react";
import Link from "next/link";
import {
  COMPARE,
  ORDER,
  DECIMALS,
  FRACTIONS,
  MIXED_NUMBERS,
  ONE,
  TWO,
  THREE,
  FOUR,
  PRACTICE_ONLY,
  EVERY,
  FIVE,
  DECIMALS_VS_FRACTIONS,
  TOPIC,
  ENGAGEMENT,
  LEVEL,
  ASSESSMENT,
} from "../../constant";
import { Table, Tr, Th, Td, Thead, Tbody, A } from "./styles";
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
  {},
  {},
];

const Dashboard = () => {
  const router = useRouter();
  const [topic, setTopic] = useState(0);
  const [engagement, setEngagement] = useState(0);
  const [level, setLevel] = useState(0);
  const [assessment, setAssessment] = useState(0);

  const handleTopic = (e) => {
    const { value } = e.target;
    setTopic(value);
    setEngagement(0);
    setLevel(0);
    setAssessment(0);
  };

  const handleEngagement = (e) => {
    const { value } = e.target;
    setEngagement(value);
    setLevel(0);
    setAssessment(0);
  };

  const handleLevel = (e) => {
    const { value } = e.target;
    setLevel(value);
    setAssessment(0);
  };

  const handleAssessment = (e) => {
    const { value } = e.target;
    setAssessment(value);
  };

  const rTopic = choices[topic].topic;
  const rEngagement = choices[topic].engagement[engagement];
  const rLevel = choices[topic].level[engagement][level];
  const rAssessment = choices[topic].assessment[engagement][level][assessment];

  const route = `${rTopic}/${rEngagement}/${rLevel}/${rAssessment}`;
  const href = `/${rTopic}/${rEngagement}/[level]/[assessment]`;

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <>
      {/* <a href={href}> */}
      {/* <form onSubmit={handleSubmit}> */}
      <label>
        {TOPIC}
        <select value={topic} onChange={handleTopic}>
          {choices.map((choice, index) => (
            <option key={`${choice.type}-${index}`} value={index}>
              {choice.topic}
            </option>
          ))}
        </select>
      </label>
      <label>
        {ENGAGEMENT}
        <select value={engagement} onChange={handleEngagement}>
          {choices[topic].engagement.map((engagementType, index) => (
            <option key={`${engagementType}-${index}`} value={index}>
              {engagementType}
            </option>
          ))}
        </select>
      </label>
      <label>
        {LEVEL}
        <select value={level} onChange={handleLevel}>
          {choices[topic].level[engagement].map((levelType, index) => (
            <option key={`${levelType}-${index}`} value={index}>
              {levelType}
            </option>
          ))}
        </select>
      </label>
      <label>
        {ASSESSMENT}
        <select value={assessment} onChange={handleAssessment}>
          {choices[topic].assessment[engagement][level].map(
            (assessmentType, index) => (
              <option key={`${assessmentType}-${index}`} value={index}>
                {assessmentType}
              </option>
            )
          )}
        </select>
      </label>

      <div style={{ margin: "2rem 0 0 0" }}>
        <Link href={href} as={route.toLowerCase()}>
          <A>go there</A>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
