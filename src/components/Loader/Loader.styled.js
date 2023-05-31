import styled from '@emotion/styled';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const LoaderWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const Spinner = styled(AiOutlineLoading3Quarters)`
  @keyframes spiner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 50px;
  height: 50px;
  color: #0084ff;
  animation-name: spiner;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
