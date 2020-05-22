import React, { FunctionComponent } from 'react';
import { LayoutContainer, ContentContainer } from "./Layout.styles";
import Header from "./headerComponent/Header.component";



const Layout: FunctionComponent = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
