import styled from "styled-components";

export const LargeSymbolCard = styled.button`
  margin: 0.6rem;
  height: 4rem;
  width: 6rem;
  border-radius: 0.6rem;
  border: 3px solid white;
  font-size: 3rem;
  background: ${({ theme }) => theme.color.orange};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.color.offBlack};
  box-shadow: ${({ theme }) => theme.boxShadow.primaryCard};

  &:active {
    transition: 0.25s;
    color: ${({ theme }) => theme.color.atol};
    box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.color.atol};
    background: ${({ theme }) => theme.color.lightBlue};
  }

  &:hover {
    outline: none;
  }

  ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 1rem;
    height: 6rem;
    width: 12rem;
    border-radius: 1rem;
    border: 4px solid white;
    font-size: 6rem;

    &:hover {
      transition: 0.25s;
      color: ${({ theme }) => theme.color.atol};
      box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.color.atol};
      background: ${({ theme }) => theme.color.lightBlue};
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const LargeSymbolCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InequalityCards = styled.div`
  font-size: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 40rem;
  }

  ${({ theme }) => theme.mediaQuery.desktop} {
    width: none;
    flex: 3;
  }
`;
