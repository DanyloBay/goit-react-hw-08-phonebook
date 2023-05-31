import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Link = styled(NavLink)`
  color: var(--accent-text-color);
  transition: color var(--main-hover-animation);
  :hover,
  :focus {
    color: var(--main-text-color);
  }
  &.active {
    color: #cccccc;
  }
`;
