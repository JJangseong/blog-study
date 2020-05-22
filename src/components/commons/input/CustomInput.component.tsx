import { NextPage } from "next";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./CustomInput.styles";

type CustomInputPropsType = {
  handleChange: any;
  label: string;
  value: any;
  name: string;
};

const CustomInputComponent: NextPage<CustomInputPropsType> = ({
  handleChange,
  label,
  value,
  ...props
}) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default CustomInputComponent;
