import styled, { css } from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  width: 25%;
`;

export const Tbody = styled.tbody``;

export const Thead = styled.thead``;

export const A = styled.a``;

export const Td = styled.td`
  ${({ index, topic }) => {
    return (
      index === topic &&
      css`
        border: 1px solid red;
      `
    );
  }}
  ${({ index, engagement }) => {
    return (
      index === engagement &&
      css`
        border: 1px solid green;
      `
    );
  }}
  ${({ index, level }) => {
    return (
      index === level &&
      css`
        border: 1px solid yellow;
      `
    );
  }}
  ${({ index, assessment }) => {
    return (
      index === assessment &&
      css`
        border: 1px solid purple;
      `
    );
  }}
`;
