import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div``;

export const Title = styled.p`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: underline;
  color: var(--accent-text-color);
`;
