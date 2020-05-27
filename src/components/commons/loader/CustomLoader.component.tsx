import { NextPage } from "next";

import { LoaderContainer } from "./CustomLoader.styles";
import Loader from "react-loader-spinner";

type Types =
  | "Audio"
  | "BallTriangle"
  | "Bars"
  | "Circles"
  | "Grid"
  | "Hearts"
  | "Oval"
  | "Puff"
  | "Rings"
  | "TailSpin"
  | "ThreeDots"
  | "Watch"
  | "RevolvingDot"
  | "Triangle"
  | "Plane"
  | "MutatingDots"
  | "None"
  | "NotSpecified";

export type ButtonTypes = {
  width?: number;
  height?: number;
  color?: string;
  type?: Types;
};

const CustomLoaderComponent: NextPage<ButtonTypes> = ({
  width,
  height,
  color,
  type,
}) => {
  return (
    <LoaderContainer>
      <Loader
        type={type || "Puff"}
        color={color || "#00BFFF"}
        height={height || 100}
        width={width || 100}
      />
    </LoaderContainer>
  );
};

export default CustomLoaderComponent;
