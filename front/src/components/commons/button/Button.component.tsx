import { NextPage } from "next";

import { CustomButtonContainer } from "./Button.styles";

export type ButtonTypes = {
  inverted?: boolean;
  onClick?: any;
};

const CustomButton: NextPage<ButtonTypes> = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
