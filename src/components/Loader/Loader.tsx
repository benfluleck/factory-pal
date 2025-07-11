import type { FC } from "react";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const LoaderCircle = styled.span`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;

  &:after,
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.colors.primary};
    animation: prixClipFix 2s linear infinite;
  }

  &:after {
    inset: 8px;
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: ${({ theme }) => theme.colors.danger};
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    75%,
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
  }
`;

const Loader: FC = () => (
  <LoaderWrapper data-testid="loader" aria-label="Loading..." role="status">
    <LoaderCircle />
  </LoaderWrapper>
);

export default Loader;
