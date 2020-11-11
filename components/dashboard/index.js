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
  // {
  //   topic: MIXED_NUMBERS,
  //   engagement: [COMPARE],
  //   level: [THREE],
  //   assessment: [[PRACTICE_ONLY, PRACTICE_ONLY, EVERY]],
  // },
  {},
  {},
];

const Dashboard = () => {
  const [topic, setTopic] = useState(0);
  const [engagement, setEngagement] = useState(0);
  const [level, setLevel] = useState(0);
  const [assessment, setAssessment] = useState(0);

  const handleTopic = (index) => {
    setTopic(index);
    setEngagement(0);
    setLevel(0);
    setAssessment(0);
  };

  const handleEngagement = (index) => {
    setEngagement(index);
    setLevel(0);
    setAssessment(0);
  };

  const handleLevel = (index) => {
    setLevel(index);
    setAssessment(0);
  };

  const handleAssessment = (index) => {
    setAssessment(index);
  };

  const rTopic = choices[topic].topic;
  const rEngagement = choices[topic].engagement[engagement];
  const rLevel = choices[topic].level[engagement][level];
  const rAssessment = choices[topic].assessment[engagement][level][assessment];

  const route = `${rTopic}/${rEngagement}/${rLevel}/${rAssessment}`;
  const href = `/${rTopic}/${rEngagement}/[level]/[assessment]`;

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>{TOPIC}</Th>
            <Th>{ENGAGEMENT}</Th>
            <Th>{LEVEL}</Th>
            <Th>{ASSESSMENT}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {choices.map((choice, index) => (
            <Tr key={topic + index}>
              <Td
                index={index}
                topic={topic}
                onClick={() => handleTopic(index)}
              >
                {choice.topic}
              </Td>
              <Td
                index={index}
                engagement={engagement}
                onClick={() => handleEngagement(index)}
              >
                {choices[topic].engagement[index]}{" "}
              </Td>
              <Td
                index={index}
                level={level}
                onClick={() => handleLevel(index)}
              >
                {choices[topic].level[engagement][index]}
              </Td>
              <Td
                index={index}
                assessment={assessment}
                onClick={() => handleAssessment(index)}
              >
                {choices[topic].assessment[engagement][level][index]}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div style={{ margin: "2rem 0 0 0" }}>
        <Link href={href} as={route.toLowerCase()}>
          <A>{route}</A>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
