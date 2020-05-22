import styled from "styled-components";
import CustomInputComponent from "../input/CustomInput.component";

type ModalProps = {
  isShow?: boolean;
};

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrap = styled.div<ModalProps>`
  width: 50%;
  height: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  transition: all 1s;
  
  opacity: ${({ isShow }) => (isShow ? "1" : "0")};
  transform: translateY(${({ isShow }) => (isShow ? "0" : "30rem")});
`;

export const ModalHeaderContainer = styled.div`
  height: 13%;
  background: ${(props) => props.theme.color.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const ModalHeaderTitle = styled.div`
  color: #fff;
  font-size: 2.5rem;
`;

export const CloseButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  position: relative;
`;

export const CloseIcon = styled.div`
  color: #fff;
  width: 2em;
  height: 2rem;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  text-align: center;
`;

export const ModalContentContainer = styled.div`
  flex: 1;
`;

export const ModalInputComponent = styled(CustomInputComponent)``;

export const ImageUploadContainer = styled.div``;

export const TitleContainer = styled.div``;

export const DescContainer = styled.div``;

export const UrlContainer = styled.div``;

export const ModalFooterContainer = styled.div`
  height: 13%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
