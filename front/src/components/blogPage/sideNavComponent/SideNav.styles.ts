import styled from "styled-components";

type NavProps = {
  isClicked: boolean;
}

export const SideNavContainer = styled.div`
  width: 25.6rem;
  padding: 3rem 3rem 3rem 0;
  max-height: calc(100vh - 7.5rem);
  overflow: scroll;
  position: fixed;
`;

export const NavHeadingContainer = styled.div`
  border-bottom: ${(props) => props.theme.line};
  padding: 0.5rem 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavTitle = styled.div`
  color: ${(props) => props.theme.color.greyDark2};
  font-size: 1.5rem;
`;

export const NavSearchIconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor:pointer;
  transition: all 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.2);
    background-color: rgba(204, 204, 204, 0.5);
  }

  &:active {
    transform: scale(1);
    background-color: rgba(204, 204, 204, 1);
  }
`;

export const SearchInput = styled.input<NavProps>`
  position: absolute;
  right: 0;
  transition: all 0.5s;
  background-color: ${props => props.isClicked ? "#fff" : props.theme.color.main};

  width: ${props => props.isClicked ? "95%" : "0%" };
  height: 3rem;
`;

export const SearchCancel = styled.div<NavProps>`
  display: ${props => props.isClicked ? 'inline-block' : 'none'};
  z-index: 100;
  transition: all 0.2s;
  border-radius: 50%;
  cursor:pointer;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;

  &:hover {
    transform: scale(1.2);
    background-color: rgba(204, 204, 204, 0.5);
  }

  &:active {
    transform: scale(1);
    background-color: rgba(204, 204, 204, 1);
  }

`;

export const NavSearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NavTagListContainer = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`;