import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled(Link)`
  display: block;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--main-text-color);
  margin-bottom: 20px;
  transition: color var(--main-hover-animation);
  :hover,
  :focus {
    color: var(--accent-text-color);
  }
`;

export const TitleColor = styled.span`
  color: var(--accent-text-color);
`;
