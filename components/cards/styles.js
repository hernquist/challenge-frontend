import styled from "styled-components";
import { FRACTIONS } from "../../constant";

export const LargeCardContainer = styled.div`
  margin: 0.6rem;
  height: 10rem;
  width: 6rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.color.pomengranate};
  border: 3px solid white;
  font-size: ${({ topic }) => (topic === FRACTIONS ? "3rem" : "2.1rem")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.offBlack};
  box-shadow: ${({ theme }) => theme.boxShadow.primaryCard};

  ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 1rem;
    height: 20rem;
    width: 12rem;
    border-radius: 1rem;
    font-size: ${({ topic }) => (topic === FRACTIONS ? "6rem" : "4.2rem")};
  }

  &:hover,
  &:focus {
    transition: 0.25s;
    box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.color.atol};
  }
`;

export const Numerator = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.color.offBlack};
  padding: 0.6rem;
  display: flex;
  justify-content: center;
`;

export const Denominator = styled.div`
  padding: 0.6rem;
  display: flex;
  justify-content: center;
`;
