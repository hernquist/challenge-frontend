import styled from "styled-components";
import { Container } from "../content-header/styles";

export const ContentPageWrapper = styled.div`
  ${({ theme }) => theme.mediaQuery.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const DesktopTopic = styled(Container)`
  display: none;

  ${({ theme }) => theme.mediaQuery.desktop} {
    display: flex;
    margin: 2rem;
    font-size: 3rem;
    width: 100%;
    max-width: 60rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mediaQuery.desktop} {
    flex-direction: ${({ desktopColumnStyle }) =>
      desktopColumnStyle ? `column` : `row-reverse`};
    justify-content: space-between;
  }
`;
