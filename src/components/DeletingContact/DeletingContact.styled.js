import styled from '@emotion/styled';

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Name = styled.span`
  color: red;
`;

export const List = styled.ul`
  display: flex;
  justify-content: right;
`;

export const Item = styled.li`
  margin-right: 10px;
  :last-child {
    margin-right: 0;
  }
`;

export const ButtonCancel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
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

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  background-color: red;
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
