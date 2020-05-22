import { NextPage } from "next";

import Card from "../../commons/card/Card.component";

import { ContentContainer } from "./CartList.style";
import { Post } from "../../../types/post";

type CardListPropsType = {
  posts: any;
  loading: any;
};

const CardListComponent: NextPage<CardListPropsType> = ({ posts, loading }) => {
  if (loading) return <div>loading....</div>;
  const postList = posts.selectPostList;
  return (
    <ContentContainer>
      {postList
        ? postList.map(({ id, title, content, createdAt, imgUrl }: Post) => (
            <Card
              key={id}
              title={title}
              content={content}
              date={createdAt}
              imgSrc={imgUrl}
              buttonTitle="more"
              url={`/blog/${id}`}
            />
          ))
        : ""}
    </ContentContainer>
  );
};

export default CardListComponent;
