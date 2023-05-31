import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 50px 10px 0 10px;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 30px;
`;
