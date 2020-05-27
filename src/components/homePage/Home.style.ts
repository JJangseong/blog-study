import styled from "styled-components";
import { Container } from "../commons/Common.styles";

type HomeProps = {
  imgSrc: any;
};

export const HomePageContainer = styled(Container)`
  display: flex;
`;

export const LeftLayout = styled.div`
  flex: 1;
  height: calc(100vh - 7.4rem);
  color: ${(props) => props.theme.color.main};

  @media (max-width: 900px) {
    color: #fff;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: calc(50vh - 14.8rem - 7.4rem);
  margin-bottom: 2rem;
`;

export const MainText = styled.span`
  font-family: "Playball", cursive;
  font-size: 5rem;
  display: inline-block;
  width: 45rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const SubText = styled.span`
  display: inline-block;
  font-size: 1.4rem;
`;

export const PhotoContainer = styled.div`
  flex: 1;

  @media (max-width: 900px) {
    flex: 0;
  }
`;

export const MainPhoto = styled.div<HomeProps>`
  position:absolute;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100vh;
  opacity: 0.8;

  @media (max-width: 900px) {
    left: 0;
    width: 100%;
    z-index: -1;
  }
`;
