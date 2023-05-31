import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  padding: 10px 25px 10px 25px;
  background-color: var(--second-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: background-color var(--main-hover-animation);
  :hover,
  :focus {
    background-color: var(--accent-bg-color);
  }
`;

export const Label = styled.span`
  margin-left: 10px;
`;
