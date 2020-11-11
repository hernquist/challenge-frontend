import styled from "styled-components";
import { FRACTIONS } from "../../constant";

export const LargeCardContainer = styled.div`
  margin: 1rem;
  height: 20rem;
  width: 12rem;
  background: ${({ theme }) => theme.color.pomengranate};
  border: 4px solid white;
  font-size: ${({ topic }) => (topic === FRACTIONS ? "6rem" : "4.2rem")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  color: ${({ theme }) => theme.color.offBlack};

  box-shadow: ${({ theme }) => theme.boxShadow.primaryCard};

  &:hover,
  &:focus {
    transition: 0.25s;
    box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.color.atol};
  }
`;

export const Numerator = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.color.offBlack};
  padding: 0.6rem;
`;

export const Denominator = styled.div`
  padding: 0.6rem;
`;
