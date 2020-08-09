import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  z-index: 10;
  height: 2.4rem;

  border-bottom: 2px solid ${({ theme }) => theme.color.offBlack};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme }) => theme.color.atol};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.atolText};
  font-size: 2rem;
  margin: 0 2rem;
`;

export const Links = styled.div`
  margin: 0 1rem;
`;

export const A = styled.a`
  margin: 0 1rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
