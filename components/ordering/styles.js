import styled from "styled-components";

export const OrderingCard = styled.div`
  height: 30px;
  width: 20px;
  border: double black;
  margin: 0 0.6rem;
`;

export const OrderingTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 2.2rem;

  /* Need fixed height */
  height: 3.6rem;

  color: ${({ theme }) => theme.color.atol};

  /* Overrides color property */
  -webkit-text-fill-color: ${({ theme }) => theme.color.atol};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.color.offBlack};
`;

export const OrderArrow = styled.span`
  font-size: 2.4rem;
  margin: 0 0.2rem;
  display: none;

  ${({ theme }) => theme.mediaQuery.tablet} {
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 2rem;

  ${({ theme }) => theme.mediaQuery.desktop} {
    margin: 0;
  }
`;

export const MobileArrow = styled.div`
  font-size: 10rem;
  display: flex;
  align-items: center;
  margin: 0 2.4rem 1rem;
  -webkit-text-fill-color: ${({ theme }) =>
    theme.color.atol}; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.color.offBlack};

  ${({ theme }) => theme.mediaQuery.tablet} {
    display: none;
  }
`;

export const DragWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 0.6rem;
`;

const grid = 6;

export const Card = styled.div`
  font-size: 1.6rem;
  user-select: "none";
  padding: ${grid / 2}px ${grid * 4}px;
  margin: 0 0 ${grid}px 0;
  border-radius: 4px;
  border: 2px solid white;
  box-shadow: ${({ theme }) => theme.boxShadow.smallButton};
  background: ${({ isDragging, theme }) =>
    isDragging ? theme.color.dodgerBlue : theme.color.mustard};

  &:hover {
    outline: none;
  }

  ${({ theme }) => theme.mediaQuery.tablet} {
    margin: 0 ${2 * grid}px ${grid}px 0;
    font-size: 3.2rem;

    &:hover {
      transition: 0.25s;
      box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.color.atol};
      background: ${({ theme }) => theme.color.lightBlue};
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }

  ${({ theme }) => theme.mediaQuery.desktop} {
    font-size: 4rem;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.iceberg};
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 1.6rem;

  ${({ isDraggingOver }) => isDraggingOver && `border: 1px solid black;`}

  padding: ${grid / 2}px;
  ${({ theme }) => theme.mediaQuery.tablet} {
    flex-direction: row;
    padding: ${grid * 2}px;
  }
`;
