import { Component } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import CustomButton from "./commons/button/Button.component";
import { NextPage } from "next";
import emptyImage from "../assets/icons/empty.png";
import unknownImage from "../assets/icons/unknown_error.png";

type ErrorProps = {
  statusCode: number;
};

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  let RenderComp: any;

  switch (statusCode) {
    case 200:
    case 404: {
      RenderComp = () => (
        <div className="content-container">
          <style jsx>{`
            .content-container {
              position: absolute;
              top: 0;
              display: flex;
              width: 100%;
              height: 100%;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .error-image {
              width: 200px;
              height: 200px;
              margin: 10px 0;
            }
          `}</style>
          <img className="error-image" alt="error-img" src={emptyImage} />
          <h3>빈 페이지입니당～</h3>
          <CustomButton onClick={() => Router.push("/")} inverted={true}>
            홈으로
          </CustomButton>
        </div>
      );
      break;
    }
    case 500: {
      RenderComp = () => (
        <div className="content-container">
          <style jsx>{`
            .content-container {
              position: absolute;
              top: 0;
              display: flex;
              width: 100%;
              height: 100%;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .error-image {
              width: 200px;
              height: 200px;
              margin: 10px 0;
            }
          `}</style>
          <img className="error-image" alt="error-img" src={unknownImage} />
          <h3>서버 에러라뉘～</h3>
          <CustomButton onClick={() => Router.push("/")}>홈으로</CustomButton>
        </div>
      );
      break;
    }
    default:
      break;
  }
  return <RenderComp />;
};

export default ErrorPage;
