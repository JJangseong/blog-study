import styled from "styled-components";
import Disqus from "disqus-react";

import CustomButton from "../button/Button.component";

type CardProps = {
  imgSrc?: string;
  commentIcon?: any;
};

export const CardHeading = styled.div<CardProps>`
  background-image: url(${(props) => props.imgSrc || "none"});
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.color.main};

  height: 31rem;
  transition: all 0.3s;

  ${(props) => (props.imgSrc ? "" : "height: 8rem; opacity: 0.8;")}
`;

export const CardContentContainer = styled.div`
  height: 28.5rem;
  padding: 1.2rem;
`;

export const CardTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.main};
`;

export const CardDate = styled.div`
  text-align: right;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.greyLight4};
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  margin-left: auto;
`;

export const CardContent = styled.div`
  font-size: 1.3rem;
  line-height: 1.6rem;
  height: 9.6rem;
  margin: 1.2rem;
  margin-bottom: 5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

export const CardContainer = styled.div`
  height: 37.7rem;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.shadow.card};
  overflow: hidden;
  transition: transform 0.3s;
  border-radius: 5px;

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);

    ${CardHeading} {
      height: 8rem;
      opacity: 0.8;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardButton = styled(CustomButton)`
  margin: 0 auto;
`;

export const CommentCountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.greyLight4};
`;

export const CommentCount = styled(Disqus.CommentCount)``;
