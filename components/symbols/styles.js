import styled from "styled-components";

export const LargeSymbolCard = styled.div`
  margin: 1rem;
  height: 6rem;
  width: 12rem;
  background: white;
  font-size: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border-radius: 1rem;
  color: ${({ theme }) => theme.color.offBlack};
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
