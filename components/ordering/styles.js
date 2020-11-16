import styled from "styled-components";

export const OrderingCard = styled.div`
  height: 30px;
  width: 20px;
  border: double black;
  margin: 0 0.6rem;
`;

export const OrderingTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 2.2rem;

  /* Need fixed height */
  height: 3.6rem;

  color: ${({ theme }) => theme.color.atol};

  /* Overrides color property */
  -webkit-text-fill-color: ${({ theme }) => theme.color.atol};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.color.offBlack};
`;

export const OrderArrow = styled.span`
  font-size: 2.4rem;
  margin: 0 0.2rem;
  display: none;

  ${({ theme }) => theme.mediaQuery.tablet} {
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileArrow = styled.div`
  font-size: 10rem;
  display: flex;
  align-items: center;
  margin: 0 2.4rem 1rem;
  /* color: ${({ theme }) => theme.color.atol}; */
  /* text-shadow:  */
  -webkit-text-fill-color: ${({ theme }) =>
    theme.color.atol}; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.color.offBlack};

  ${({ theme }) => theme.mediaQuery.tablet} {
    display: none;
  }
`;

export const DragWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
