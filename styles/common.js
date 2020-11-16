import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.color.orange};
  font-family: ${({ theme }) => theme.font.regular};
  border: 2px solid white;
  box-shadow: ${({ theme }) => theme.boxShadow.smallButton};
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;

  cursor: pointer;
  color: ${({ theme }) => theme.color.offBlack};

  &:active {
    transition: 0.25s;
    color: ${({ theme }) => theme.color.atol};
    box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.color.atol};
    background: ${({ theme }) => theme.color.lightBlue};
  }

  &:hover {
    outline: none;
  }

  ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 1rem;
    height: 6rem;
    width: 12rem;
    border-radius: 1rem;
    border: 4px solid white;
    font-size: 6rem;

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
