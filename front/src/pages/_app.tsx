import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import "react-markdown-editor-lite/lib/index.css";
import "../styles/atom-one-light.css";

import withData from "../configureClient";

import GlobalStyles from "../styles/Global.styles";
import theme from "../styles/Theme.styles";

import { ThemeProvider } from "styled-components";
import Layout from "../components/layout/Layout.component";

import rootReducer from "../redux/index";
import { client } from "../configureClient";
import { createWrapper } from "next-redux-wrapper";
import store from '../redux/index';

const App = ({ Component, pageProps, apollo }: any) => {
  // store = createStore(
  //   rootReducer,
  //   applyMiddleware(logger, Thunk.withExtraArgument(apollo))
  // );

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

// const configureStore = (initialState: any) => {
//   const middlewares: any = [logger, Thunk.withExtraArgument(client)]; // 미들웨어들을 넣으면 된다.
//   const enhancer =
//     process.env.NODE_ENV === "production"
//       ? compose(applyMiddleware(...middlewares))
//       : composeWithDevTools(applyMiddleware(...middlewares));
//   const store = createStore(rootReducer, initialState, enhancer);
//   return store;
// };

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(withData(App));
