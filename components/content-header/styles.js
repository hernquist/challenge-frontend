import styled from "styled-components";

export const Container = styled.div`
  border: 3px solid white;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.dodgerBlue};
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1.6rem 0 1rem;
  padding: 1.2rem 1.6rem;
  font-family: ${({ theme }) => theme.font.regular};
  color: white;
  font-size: 1.2rem;
  text-transform: capitalize;

  ${({ theme }) => theme.mediaQuery.desktop} {
    margin: ${({ desktopColumnStyle }) =>
      desktopColumnStyle ? `0 0 0.6rem` : `1.6rem 0 1rem`};
    min-width: 14rem;
    max-width: 16rem;
  }
`;

export const Question = styled.div`
  text-transform: none;
`;

export const Correct = styled.div`
  margin: 1rem 0 0 0;
`;

export const Topic = styled.h3`
  margin: 0;

  ${({ theme }) => theme.mediaQuery.desktop} {
    display: none;
  }
`;
