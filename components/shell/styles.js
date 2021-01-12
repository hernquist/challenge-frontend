import styled from "styled-components";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.color.iceberg};
  min-height: calc(100vh - 6.2rem);
  padding: 6.2rem 0 0 0;

  ${({ theme }) => theme.mediaQuery.tablet} {
    min-height: calc(100vh - 4rem);
    padding: 4rem 0 0 0;
  }
`;
