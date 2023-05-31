import styled from '@emotion/styled';
import { Field } from 'formik';

export const TitlePage = styled.h2`
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
`;

export const StyledField = styled(Field)`
  height: 40px;
  padding: 0 10px 0 10px;
  border: 1px solid var(--second-bg-color);
  outline: none;
  color: var(--main-text-color);
  font-size: 14px;
  :focus {
    border-color: var(--accent-bg-color);
  }
  ::placeholder {
    font-size: 12px;
    color: var(--main-text-color);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: background-color var(--main-hover-animation);
  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
