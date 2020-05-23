import styled from "styled-components";
import { Container } from "../commons/Common.styles";
import ShareComponent from "./shareComponent/Share.component";

type PostProps = {
  imgUrl?: string;
};

export const PostContainer = styled(Container)`
  max-width: 99.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: ${({theme}) => theme.shadow.dark};

`;

export const ImageContainer = styled.div<PostProps>`
  width: 100%;
  height: 50rem;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position:center;
`;

export const MainContainer = styled.div`
  width: 79rem;

  @media (max-width: 79rem) {
    width: 98%;
  }
`;

export const DisqusContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const BottomShareContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

`;

export const BottomShareComponent = styled(ShareComponent)`
  margin-left: auto;
`