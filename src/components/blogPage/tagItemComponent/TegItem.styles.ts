import styled from "styled-components";

type BlogProps = {
  isActive?: boolean;
};

export const NavTagItemContainer = styled.div<BlogProps>`
  display: flex;
  align-items: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.main : theme.color.greyDark2};
  font-weight: ${({ isActive }) => isActive && "bold"};
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const NavTagItemTitle = styled.div`
  margin-right: 2rem;
`;

export const NavTagItemCount = styled.span``;