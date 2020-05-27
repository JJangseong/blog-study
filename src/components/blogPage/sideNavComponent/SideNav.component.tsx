import { NextPage } from "next";
import { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";

import TagItemComponent from "../tagItemComponent/TegItem.component";
import SearchIcon from "../../../assets/icons/search_icon.svg";
import { Tag } from "../../../types/tag";

import {
  SideNavContainer,
  NavTagListContainer,
  NavTitle,
  NavHeadingContainer,
  NavSearchIconContainer,
  NavSearchIcon,
  SearchInput,
  SearchCancel,
} from "./SideNav.styles";

const GET_TAGS = gql`
  query getTags {
    selectTagList {
      content
      count
    }
  }
`;

type SideNavPropsType = {
  push: any;
  tag: string;
  handleSearchInput: any;
};

const SideNavComponent: NextPage<SideNavPropsType> = ({ push, tag, handleSearchInput }) => {
  const [isClicked, setClicked] = useState(false);
  const { loading, error, data } = useQuery(GET_TAGS);

  if (loading) return null;

  const handleClick = () => {
    setClicked(!isClicked);
  };

  const tags = data.selectTagList;
  const totalCount = tags.reduce((a: any, b: any) => a + Number(b.count), 0);

  return (
    <SideNavContainer>
      <NavHeadingContainer>
        <NavTitle>태그 목록</NavTitle>
        <NavSearchIconContainer>
          <NavSearchIcon src={SearchIcon} onClick={handleClick} />
        </NavSearchIconContainer>
        <SearchInput
          placeholder="검색어를 입력해주세요."
          isClicked={isClicked}
          onChange={handleSearchInput}
        />
        <SearchCancel isClicked={isClicked} onClick={handleClick}>
          X
        </SearchCancel>
      </NavHeadingContainer>
      <NavTagListContainer>
        <TagItemComponent
          title="전체"
          count={totalCount}
          isActive={!tag}
          push={push}
        />
        {tags.map(({ content, count }: Tag, index: any) => (
          <TagItemComponent
            key={index}
            title={content}
            count={count as string}
            isActive={tag === content}
            push={push}
          />
        ))}
      </NavTagListContainer>
    </SideNavContainer>
  );
};

export default SideNavComponent;
