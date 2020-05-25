import styled from "styled-components";
import Disqus from "disqus-react";
import quoteIcon from "../../../assets/icons/quote_icon.svg";

import CustomButton from "../button/Button.component";

type CardProps = {
  imgSrc?: string;
  commentIcon?: any;
  isLong?: boolean;
};

export const CardHadingContainer = styled.div`
  width: 100%;
  height: 22.5rem;
  overflow: hidden;
`;

export const CardHeading = styled.a<CardProps>`
  background-image: url(${(props) => props.imgSrc || "none"});
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.color.main};
  display: block;

  transition: all 0.3s;

  width: 100%;
  height: 100%;

  &:hover {
    transform: scale(1.1);
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const CardContentContainer = styled.div`
  height: calc(100% - 22.5rem - 5rem);
  padding: 2.5rem 2rem;
`;

export const CardTitle = styled.h2`
  text-align: left;
  font-size: 1.7rem;
  font-weight: 700;
  color: #000;

  &:hover {
    color: ${(props) => props.theme.color.main};
    cursor: pointer;
  }
`;

export const CardDate = styled.span`
  text-align: right;
  font-size: 1.3rem;
  color: ${(props) => props.theme.color.greyLight4};
  margin-left: auto;
`;

export const CardContent = styled.p<CardProps>`
  font-size: 1.3rem;
  line-height: 1.7rem;
  color: ${(props) => props.theme.color.greyDark3};
  height: auto;
  max-height: calc(100% - 5rem);
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isLong ? "6" : "4")};
  -webkit-box-orient: vertical;
`;

export const CardContainer = styled.div<CardProps>`
  height: ${(props) => (props.isLong ? "45rem" : "40rem")};
  max-width: 30.5rem;

  background-color: #fff;
  box-shadow: ${(props) => props.theme.shadow.card};
  overflow: hidden;
  transition: transform 0.3s;
  border-radius: 5px;
`;

export const InfoContainer = styled.div`
  padding: 1rem 0;
  height: 1.3rem;
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

export const UndefindeImgContainer = styled.div`
  max-width: calc(30.5rem - 4rem);
  height: 25rem;
  background-color: ${(props) => props.theme.color.greyLight2};
  box-shadow: ${(props) => props.theme.shadow.card};
  position: relative;
  padding: 2.5rem 2rem;
`;

export const IconComponent = styled.div`
  background: url(${quoteIcon}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 8rem;
  height: 8rem;
  display: inline-block;
  opacity: 0.1;
  position: absolute;
  top: 0;
  left: 0;
`;

export const UndefindeTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
  display: inline-block;
  width: 100%;
  height: auto;
  text-align: center;

  &:hover {
    color: ${(props) => props.theme.color.main};
    cursor: pointer;
  }
`;

export const UndefindeContent = styled.p`
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: normal;
  line-height: 1.7rem;
  word-break: break-all;
  color: ${(props) => props.theme.color.greyDark3};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;
