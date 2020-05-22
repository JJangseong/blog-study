import styled from "styled-components";
import CustomButton from "../commons/button/Button.component";

import { Container } from "../commons/Common.styles";

import headingImg from "../../assets/images/portfolio_main.jpg";

export const PortfolioContainer = styled(Container)``;

export const HeadingContainer = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeadingImage = styled.div`
  background-image: url(${headingImg});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 40rem;
  top: 7.5rem;
  left: 0;
  position: absolute;
  opacity: 0.5;
  z-index: -1;
`;

export const HeadingTitle = styled.div`
  color: ${(props) => props.theme.color.main};
  font-size: 10rem;
  font-family: "Playball", cursive;
  text-transform: uppercase;
  letter-spacing: 1rem;
  display: inline-block;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  height: auto;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
`;

export const Button = styled(CustomButton)`
  margin-top: 3rem;
`;
