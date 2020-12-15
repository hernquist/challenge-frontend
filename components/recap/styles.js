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
  font-size: 2rem;

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 5rem;
  }
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0.4rem;
  font-size: 1.6rem;

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 3rem;
    margin: 0 2rem;
  }
`;

export const Question = styled.div`
  font-size: 1.6rem;
  color: ${({ theme, correct }) =>
    correct ? theme.color.atol : theme.color.pomengranate};
  background: white;
  padding: 0.2rem 1rem;
  margin: 0 5%;
  border: 1px solid black;

  ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 0 10%;
    font-size: 2.4rem;
  }
`;

export const RecapList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left-align;
  width: 100%;
  margin: 2rem 0;
  max-height: 24.1rem;
  overflow-y: auto;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const ReviewATag = styled.a`
  font-size: 1.2rem;
  text-align: center;
  text-decoration: underline;
  margin: 0 1rem;
  cursor: pointer;

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1.6rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0.5rem;

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 5rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: content;
  margin: 0 0.5rem;
`;

export const BottomNav = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Reset = styled.div`
  font-size: 1.2rem;
  max-width: 12rem;
  text-align: center;
  text-decoration: underline;
  margin: 0 1rem;
  cursor: pointer;

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1.6rem;
  }
`;
