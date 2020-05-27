import styled from "styled-components";

export const EditerHeaderContainer = styled.div`
  width: calc(100vw - 12rem);
  padding: 3rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  height: 5rem;
  border-bottom: ${(props) => props.theme.line};
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  font-size: 3rem;
  color: ${({ theme }) => theme.color.greyDark2};

  &:active,
  &:focus {
    outline: none;
  }
`;

export const TagContainer = styled.div`
  height: 2rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const TagInput = styled.input`
  flex: 1;
  height: 2.2rem;
  border: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.color.greyDark2};

  &:active,
  &:focus {
    outline: none;
  }
`;

export const TagItem = styled.div`
  width: auto;
  margin-right: 1rem;
  padding: 1rem 1.1rem;
  border-radius: 100px;
  color: ${({ theme }) => theme.color.mainLight};
  border: 1px solid ${({ theme }) => theme.color.mainLight};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.color.mainLight};
  }
`;
