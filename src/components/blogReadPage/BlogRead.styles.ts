import styled from "styled-components";
import { Container } from "../commons/Common.styles";

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

export const DisqusContainer = styled.div`
  width: 95%;
`;
