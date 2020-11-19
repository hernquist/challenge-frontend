import styled from "styled-components";

export const Main = styled.main`
  min-height: 100%;
`;

export const Body = styled.body`
  margin: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.iceberg};
  /* overflow-y: hidden; */
`;
