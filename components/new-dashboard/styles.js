import styled from "styled-components";

export const A = styled.a`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.regular};
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 2rem 0 0 0;

  label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: ${({ theme }) => theme.font.regular};
    margin: 0.6rem 0;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0.4rem 0 1rem 0;
`;

export const LinkWrapper = styled.div`
  border: 2px double black;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.color.mustard};
  box-shadow: ${({ theme }) => theme.boxShadow.smallButton};
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 1rem 0.6rem;
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
`;
