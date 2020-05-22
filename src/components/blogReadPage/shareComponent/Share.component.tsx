import { NextPage } from "next";

import {
  EmailIcon,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
} from "react-share";

import {
  ShareContainer,
  EmailButton,
  FacebookeButton,
  LineButton,
  TwitterButton,
} from "./Share.styles";

type SharePropsType = {
  isShow: boolean
}

const ShareComponent: NextPage<SharePropsType> = ({isShow}) => {

  return (
    <ShareContainer isShow={isShow}>
      <FacebookeButton url="www.naver.com">
        <FacebookIcon size={32} round={true} />
      </FacebookeButton>
      <EmailButton url="www.naver.com">
        <EmailIcon size={32} round={true} />
      </EmailButton>
      <LineButton url="www.naver.com">
        <LineIcon size={32} round={true} />
      </LineButton>
      <TwitterButton url="www.naver.com">
        <TwitterIcon size={32} round={true} />
      </TwitterButton>
    </ShareContainer>
  );
};

export default ShareComponent;
