import React from "react";
import PropTypes from "prop-types";
import ErrorPage from "../components/ErrorPage";

type Props = {
  statusCode: number;
};

export default class Error extends React.Component<Props> {
  static propTypes = {
    statusCode: PropTypes.number,
  };
  static defaultProps = {
    statusCode: 200,
  };
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return <ErrorPage statusCode={statusCode || 200} />;
  }
}
