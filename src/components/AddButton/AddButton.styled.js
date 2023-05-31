import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 40px;
  margin-bottom: 50px;
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
`;

export const ButtonText = styled.span`
  margin-right: 10px;
`;
