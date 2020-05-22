import { ApolloProvider } from "@apollo/react-hooks";

import "react-markdown-editor-lite/lib/index.css";
import "../styles/atom-one-light.css";

import withData from "../configureClient";
import GlobalStyles from "../styles/Global.styles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme.styles";
import Layout from "../components/layout/Layout.component";

const App = ({ Component, pageProps, apollo }: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apollo}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default withData(App);
