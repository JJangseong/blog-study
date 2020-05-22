import styled from "styled-components";


export const ContentContainer = styled.div`
  height: auto;
  width: 99.5rem;
  display: flex;
  position: relative;

  @media (max-width: 99.5rem) {
    width: 100%;
  }
`;


export const Content = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  width: 79rem;
  height: 100%;
  background-color: aqua;

  @media (max-width: 74rem) {
    width: 100%;
  }
`;