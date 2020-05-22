import { NextPage } from "next";

import { TagContainer, TagItem } from "./PostTags.styles";
import { Tag } from "../../../types/tag";

type PostTagsPropsType = {
  tags: Tag[];
};

const PostTagsComponent: NextPage<PostTagsPropsType> = ({ tags }) => {
  return (
    <TagContainer>
      {tags.map(({ id, content }) => (
        <TagItem key={id}>{content}</TagItem>
      ))}
    </TagContainer>
  );
};

export default PostTagsComponent;
