import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Input = styled.input`
  font-size: 1.6rem;
  margin: 0 0 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.font.regular};
  margin: 0 0 1rem;
`;

export const A = styled.a`
  font-size: 1.4rem;
  text-decoration: underline;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.font.regular};
  display: flex;
  justify-content: flex-end;
  padding: 0.1rem;
`;

export const SubmitButton = styled.button`
  margin: 1rem 25%;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color.offBlack};
  background: white;
  border: 2px solid ${({ theme }) => theme.color.offBlack};
  border-radius: 0.4rem;
  cursor: pointer;
`;
