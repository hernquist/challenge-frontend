import styled from "styled-components";

export const RecapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  font-size: 5rem;
`;

export const Scores = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  font-size: 4rem;
`;

export const Question = styled.div`
  font-size: 4rem;
  color: ${({ theme, correct }) =>
    correct ? theme.color.atol : theme.color.pomengranate};
`;

export const ReviewATag = styled.a`
  font-size: 1.6rem;
  max-width: 12rem;
  text-align: center;
  text-decoration: underline;
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin: 0 0.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: content;
  margin: 0 0.5rem;
`;
