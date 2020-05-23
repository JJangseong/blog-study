import styled from "styled-components";

export const TagContainer = styled.div`
  width: 76rem;
  display: flex;
  margin-top: 3rem;

  @media (max-width: 76rem) {
    width: 100%;
    margin-left: 2.5rem;
  }
`;

export const TagItem = styled.span`
  width: auto;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 100px;
  margin-right: 0.5rem;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.color.main};
    color: #fff;
  }
`;
