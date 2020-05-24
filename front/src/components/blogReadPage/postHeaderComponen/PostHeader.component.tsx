import { NextPage } from "next";

import { HeadingContainer, Title, DateText } from "./PostHeader.styles";

type PostHeaderPropsType = {
  title: String;
  createdAt: any;
};

const PostHeaderComponent: NextPage<PostHeaderPropsType> = ({
  title,
  createdAt,
}) => {
  return (
    <HeadingContainer>
      <Title>{title}</Title>
      <DateText>{createdAt}</DateText>
    </HeadingContainer>
  );
};

export default PostHeaderComponent;
