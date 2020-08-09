import styled from "styled-components";

export const LFC = styled.div`
  margin: 1rem;
  height: 20rem;
  width: 12rem;
  background: white;
  font-size: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 1rem;
  color: ${({ theme }) => theme.color.offBlack};
`;

export const Numerator = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.color.offBlack};
  padding: 0.6rem;
`;

export const Denominator = styled.div`
  padding: 0.6rem;
`;
