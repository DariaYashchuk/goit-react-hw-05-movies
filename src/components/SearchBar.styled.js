import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;

  height: 35px;
  width: 250px;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: 0;
    border-color: #053ba3;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  height: 35px;
  width: 35px;

  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;

  svg {
    width: 100%;
    height: 100%;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      fill: #053ba3;
    }
  }
`;
