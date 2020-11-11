import styled from "styled-components";

export const LargeSymbolCard = styled.div`
  margin: 1rem;
  height: 6rem;
  width: 12rem;
  background: ${({ theme }) => theme.color.orange};
  font-size: 6rem;
  padding: 0 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 1rem;
  color: ${({ theme }) => theme.color.offBlack};
  border: 4px solid white;
  box-shadow: ${({ theme }) => theme.boxShadow.primaryCard};

  &:hover,
  &:focus {
    transition: 0.25s;
    color: ${({ theme }) => theme.color.atol};
    box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.color.atol};
    background: ${({ theme }) => theme.color.lightBlue};
  }
`;

export const LargeSymbolCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InequalityCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 40rem;
  justify-content: space-around;
  width: 100%;
`;
