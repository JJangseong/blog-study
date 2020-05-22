import styled from "styled-components";

export const HeadingContainer = styled.div`
  height: 20rem;
  width: 73rem;
  color: ${(props) => props.theme.color.greyDark3};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  border-bottom: ${(props) => props.theme.line};
  
  @media only screen and (max-width: 79rem) {
    width: calc(100% - 2rem);
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  display: inline-block;
  padding-top: 3rem;
  font-size: 4rem;
  font-weight: bold;
`;

export const DateText = styled.p`
  display: inline-block;
  margin-left: auto;
  padding-bottom: 2rem;
  text-align: right;
`;
