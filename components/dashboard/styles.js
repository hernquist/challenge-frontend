import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 2rem 1rem 0 1rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: ${({ theme }) => theme.font.regular};
  margin: 0.6rem auto 0;
  padding: 0.1rem 0.3rem;
  font-size: 1.6rem;
  text-transform: capitalize;
  border-radius: 0.1rem;

  ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 1.6rem;
    border-bottom: 1px solid black;
    margin: 0.6rem auto;
  }
`;

export const DashboardButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.4rem auto 1rem;
  max-width: 50rem;

  ${({ theme }) => theme.mediaQuery.tablet} {
    flex-direction: row;
  }
`;

export const LinkWrapper = styled.div`
  border: 2px double black;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  margin: 0.6rem 0;
  background: ${({ theme }) => theme.color.mustard};
  box-shadow: ${({ theme }) => theme.boxShadow.smallButton};
  text-align: center;
  cursor: pointer;

  ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 0 1rem;
  }
`;

export const A = styled.a`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.regular};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto 0.6rem;
  max-width: 40rem;
`;

export const LevelButton = styled.button`
  border: 1px solid black;
  padding: 0.5rem 1rem 0.4rem;
  margin: 0 0.6rem 0.6rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  background: ${({ theme, active }) =>
    active ? theme.color.lavender : theme.color.mustard};
  box-shadow: ${({ theme }) => theme.boxShadow.smallButton};
  cursor: pointer;

  &:hover {
    outline: none;
  }

  ${({ theme }) => theme.mediaQuery.tablet} {
    &:hover {
      transition: 0.25s;
      color: ${({ theme }) => theme.color.atol};
      box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.color.atol};
      background: ${({ theme }) => theme.color.lightBlue};
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
