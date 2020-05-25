import styled, { css } from "styled-components";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
} from "react-share";

type Props = {
  isShow: boolean;
  direction?: string;
};

export const ShareContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: space-between;
  align-content: center;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.isShow ? "1" : "0")};
  position: ${(props) => (props.direction === "column" ? "sticky" : "")};
  top: 8rem;
  height: ${props => props.direction === "column" ? "15rem" : "3rem"};
  left: calc((100vw - 99.5rem) / 2 + 4rem);
`;

const ButtonCss = css`
  transition: all 0.3s;
  margin: 0.2rem;

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export const EmailButton = styled(EmailShareButton)`
  ${ButtonCss}
`;

export const FacebookeButton = styled(FacebookShareButton)`
  ${ButtonCss}
`;

export const LineButton = styled(LineShareButton)`
  ${ButtonCss}
`;

export const TwitterButton = styled(TwitterShareButton)`
  ${ButtonCss}
`;
