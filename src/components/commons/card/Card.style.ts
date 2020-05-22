import styled from "styled-components";
import { CustomButton } from "../button/Button.styles";

type CardProps = {
  imgSrc?: string;
};

export const CardHeading = styled.div<CardProps>`
  background-image: url(${(props) => props.imgSrc || "none"});
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.color.main};

  height: 31rem;
  transition: all 0.3s;

  /* ${(props) => (props.imgSrc ? "" : "height: 8rem; opacity: 0.8;")} */
  
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
`;

export const CardContent = styled.div`
  font-size: 1.3rem;
  line-height: 1.6rem;
  height: 15rem;
  margin: 1.2rem;
  overflow: hidden;
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

export const CardButton = styled(CustomButton)`
  margin: 0 auto;
`;
