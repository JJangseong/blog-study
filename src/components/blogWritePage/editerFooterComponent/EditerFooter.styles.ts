import styled from "styled-components";
import CustomButton from "../../commons/button/Button.component";

export const EditerFooterContainer = styled.div`
  width: calc(100% - 6rem);
  height: 7rem;
  display: flex;
  align-items: center;
  border-top: ${(props) => props.theme.line};
  margin: 0 3rem 0 3rem;
`;

export const Button = styled(CustomButton)`
  min-width: 10rem;
  height: 4rem;
  line-height: 4rem;
  padding: 0;

  &:nth-child(2) {
    margin-left: auto;
    margin-right: 3rem;
  }
`;
