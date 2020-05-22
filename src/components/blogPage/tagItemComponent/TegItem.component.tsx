import { NextPage } from "next";

import {
  NavTagItemContainer,
  NavTagItemCount,
  NavTagItemTitle,
} from "./TegItem.styles";

type TagItemProps = {
  title: string;
  count: string;
  isActive?: boolean;
  push: any;
};

const TagItemComponent: NextPage<TagItemProps> = ({
  title,
  count,
  isActive,
  push,
}) => {
  const handleClick = () => push(`/blog?tag=${title === "전체" ? "" : title}`);

  return (
    <NavTagItemContainer isActive={isActive} onClick={handleClick}>
      <NavTagItemTitle>{title}</NavTagItemTitle>
      <NavTagItemCount>[ {count} ]</NavTagItemCount>
    </NavTagItemContainer>
  );
};

export default TagItemComponent;
