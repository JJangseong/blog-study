import { NextPage } from "next";

import Card from "../../commons/card/Card.component";
import CustomLoaderComponent from '../../commons/loader/CustomLoader.component';

import { ContentContainer } from "./CartList.style";

import { Post } from "../../../types/post";

type CardListPropsType = {
  posts: any;
  loading: boolean;
  searchInput: string;
};

const CardListComponent: NextPage<CardListPropsType> = ({
  posts,
  loading,
  searchInput,
}) => {
  if (loading) return <CustomLoaderComponent />;
  const postList = posts.selectPostList;



  return (
    <ContentContainer>
      {postList
        ? postList
            .filter(({ title }: Post) => title.search(searchInput) !== -1)
            .map(({ id, title, content, createdAt, imgUrl }: Post) => (
              <Card
                key={id}
                id={id as string}
                title={title}
                content={content}
                date={createdAt}
                imgSrc={imgUrl}
                buttonTitle="more"
                url={`/blog/${id}`}
                urlType="B"
              />
            ))
        : ""}
    </ContentContainer>
  );
};

export default CardListComponent;
