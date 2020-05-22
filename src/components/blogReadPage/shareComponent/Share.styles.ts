import styled, { css } from "styled-components";
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
} from "react-share";

type Props = {
  isShow: boolean;
};

export const ShareContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.isShow ? "1" : "0")};
  position: fixed;
  top: 8rem;
  width: 7.2rem;
  height: 15rem;
  margin: 2.5rem;

`;

const ButtonCss = css`
  transition: all 0.3s;

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
