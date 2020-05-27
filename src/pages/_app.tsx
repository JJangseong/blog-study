import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";

import "react-markdown-editor-lite/lib/index.css";
import "../styles/atom-one-light.css";

import withData from "../configureClient";

import GlobalStyles from "../styles/Global.styles";
import theme from "../styles/Theme.styles";

import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/Layout.component";

import rootReducer from "../redux/index";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/index";

const App = ({ Component, pageProps, apollo }: any) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apollo}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </ThemeProvider>
      </Provider>
      <GlobalStyles />
    </>
  );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(withData(App));
