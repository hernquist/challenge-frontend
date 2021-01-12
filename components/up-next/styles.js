import styled from "styled-components";

export const ModuleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: fit-content;
`;

export const UpNextPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UpNextTitle = styled.h1`
  margin: 1rem;
  font-family: ${({ theme }) => theme.font.regular};
  padding: 2rem;
  border: 2px solid white;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.color.dodgerBlue};
  color: white;
  font-size: 1.6rem;

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 2.4rem;
    margin: 2rem 0;
  }
`;
