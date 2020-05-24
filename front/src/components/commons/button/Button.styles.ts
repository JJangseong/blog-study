import styled, { css } from "styled-components";
import Link from "next/link";

type ButtonProps = {
  inverted?: boolean;
};

const buttonStyles = css`
  background-color: ${(props) => props.theme.color.main};
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: ${(props) => props.theme.color.main};
    color: white;
    border: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${(props) => props.theme.color.mainLight};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`;

const getButtonStyles = (props: ButtonProps) => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 16.5rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s;

  &:active,
  &:focus {
    outline: none;
  }

  &:active {
    font-size: 1.4rem;
  }

  ${getButtonStyles}
`;

export const CustomButton = styled.a`
  min-width: 16.5rem;
  width: 15rem;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s;

  &:active,
  &:focus {
    outline: none;
  }

  &:active {
    font-size: 1.4rem;
  }

  ${getButtonStyles}
`;
