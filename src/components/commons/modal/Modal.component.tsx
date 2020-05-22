import { NextPage } from "next";
import {
  ModalFooterContainer,
  ModalHeaderTitle,
  CloseIcon,
  ModalContainer,
  ModalWrap,
  ModalContentContainer,
  ModalHeaderContainer,
  CloseButton,
  ModalInputComponent,
} from "./Modal.styles";

import CustomInputComponent from "../input/CustomInput.component";
import CustomButton from "../button/Button.component";

export type ModalPropsType = {
  isShow: boolean;
  handleModal: any;
  inputs?: any;
  handleInputChange?: any;
};

const ModalComponent: NextPage<ModalPropsType> = ({
  isShow,
  inputs,
  handleInputChange,
  handleModal,
  ...props
}) => {
  const { title, desc, url, imgData } = inputs;

  if (!isShow) return null;
  return (
    <ModalContainer>
      <ModalWrap isShow={isShow}>
        <ModalHeaderContainer>
          <ModalHeaderTitle>포트폴리오</ModalHeaderTitle>
          <CloseButton onClick={handleModal}>
            <CloseIcon>x</CloseIcon>
          </CloseButton>
        </ModalHeaderContainer>
        <ModalContentContainer>
          <ModalInputComponent
            label="제목"
            name="title"
            value={title}
            handleChange={handleInputChange}
          />
          <ModalInputComponent
            label="주소"
            name="url"
            value={url}
            handleChange={handleInputChange}
          />
          <ModalInputComponent
            label="설명"
            name="desc"
            value={desc}
            handleChange={handleInputChange}
          />
        </ModalContentContainer>
        <ModalFooterContainer>
          <CustomButton>저장</CustomButton>
        </ModalFooterContainer>
      </ModalWrap>
    </ModalContainer>
  );
};

export default ModalComponent;
