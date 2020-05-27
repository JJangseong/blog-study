import styled from "styled-components";
import { Container } from "../../commons/Common.styles";

type HeaderProps = {
  isHome?: boolean;
};

export const HeaderContainer = styled.div<HeaderProps>`
  border-bottom: ${(props) => (props.isHome ? "none" : props.theme.line)};
  /* box-shadow: ${(props) => (props.isHome ? "none" : props.theme.shadow.light)}; */
`;

export const HeaderItemContainer = styled(Container)<HeaderProps>`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding: 1.9rem 0;
  color: ${(props) => props.theme.color.main};

  @media (max-width: 900px) {
    color: ${(props) => (props.isHome ? "#fff" : props.theme.color.main)};
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  font-size: 2.5rem;
  font-family: "Playball", cursive;

  @media (max-width: 900px) {
    z-index: 100;
  }
`;

export const HeaderLogoPoint = styled.span`
  color: ${(props) => props.theme.color.greyDark2};
`;

export const NavList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const NavItem = styled.a<HeaderProps>`
  display: inline-block;
  margin-left: 0.8rem;
  width: 10rem;
  padding: 0.9rem 0;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  transition: all 0.2s;

  color: ${(props) => props.isHome && "#fff"};

  &:last-child {
    // border: ${(props) => (props.isHome ? "none" : props.theme.mainBorder)};
  }

  &:hover {
    background-color: ${(props) => props.theme.color.main};
    color: #fff;
    transform: scale(1.1);
  }
`;
