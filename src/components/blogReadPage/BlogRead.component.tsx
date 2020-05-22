import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter, NextRouter } from "next/dist/client/router";
import Disqus from "disqus-react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";

import {
  PostContainer,
  ImageContainer,
  DisqusContainer,
} from "./BlogRead.styles";

import PostHeaderComponent from "./postHeaderComponen/PostHeader.component";
import PostContentComponent from "./postContentComponents/PostContent.component";
import PostTagsComponent from "./postTagsComponent/PostTags.component";

import HomePhoto from "../../assets/images/home_main.jpg";

const GET_BLOG = gql`
  query getBlog($id: String) {
    selectPost(id: $id) {
      id
      title
      content
      imgUrl
      url
      tags {
        id
        content
      }
      createdAt
    }
  }
`;

const BlogReadComponent: NextPage = () => {
  const router: NextRouter = useRouter();
  const id: string = router.query.id as string;

  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { id },
  });
  if (loading) return <div>loading.....</div>;
  const post = data.selectPost;
  const { title, tags, createdAt, imgUrl } = post;

  const disqusShortname = "sungjin-log";
  const disqusConfig = {
    url: "http://localhost:3000/" + id,
    identifier: id,
    title: post.title,
  };

  return (
    <PostContainer>
      <PostHeaderComponent title={title} createdAt={createdAt} />
      {imgUrl ? <ImageContainer imgUrl={imgUrl} /> : ""}
      <PostContentComponent post={post} />
      <PostTagsComponent tags={tags} />
      <DisqusContainer>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </DisqusContainer>
    </PostContainer>
  );
};

export default BlogReadComponent;
