import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  border-bottom: 2px solid ${({ theme }) => theme.color.offBlack};
  font-family: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme }) => theme.color.atol};
  padding: 0 0 0.2rem;

  ${({ theme }) => theme.mediaQuery.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 2.4rem;
    padding: 0;
  }
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

  ${({ theme }) => theme.mediaQuery.tablet} {
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Email = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQuery.tablet} {
    display: block;
  }
`;
