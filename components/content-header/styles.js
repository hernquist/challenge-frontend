import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid white;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.denim};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0 1rem;
  padding: 1.2rem 1.6rem;
  font-family: ${({ theme }) => theme.font.regular};

  color: white;
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const Question = styled.div`
  text-transform: none;
`;

export const Correct = styled.div`
  margin: 1rem 0 0 0;
`;

export const Topic = styled.h3`
  margin: 0;
`;
