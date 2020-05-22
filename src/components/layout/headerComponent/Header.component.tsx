import React, { FunctionComponent } from "react";

import Link from "next/link";

import {
  HeaderContainer,
  HeaderItemContainer,
  HeaderLogo,
  HeaderLogoPoint,
  NavItem,
  NavList,
} from "./Header.styles";
import { useRouter } from "next/dist/client/router";

const Header: FunctionComponent = () => {
  const router = useRouter();
  const isHome= router.pathname === "/" ? true : false;
  const isWrite = router.pathname.indexOf('write') > -1 ? true : false;

  if(isWrite) return null;
  return (
    <HeaderContainer isHome={isHome}>
      <HeaderItemContainer isHome={isHome}>
        <Link href="/">
          <HeaderLogo>
            Sungjin
            <HeaderLogoPoint> . Log</HeaderLogoPoint>
          </HeaderLogo>
        </Link>
        <NavList>
          <Link href="/story">
            <NavItem isHome={isHome}>My Story</NavItem>
          </Link>
          <Link href="/portfolio">
            <NavItem isHome={isHome}>Portfolio</NavItem>
          </Link>
          <Link href="/blog">
            <NavItem isHome={isHome}>Blog</NavItem>
          </Link>
        </NavList>
      </HeaderItemContainer>
    </HeaderContainer>
  );
};

export default Header;
