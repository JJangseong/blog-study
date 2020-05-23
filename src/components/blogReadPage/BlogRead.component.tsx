import { NextPage } from "next";
import { useRouter, NextRouter } from "next/dist/client/router";
import Disqus from "disqus-react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";

import {
  PostContainer,
  ImageContainer,
  DisqusContainer,
  MainContainer,
  BottomShareComponent,
  BottomShareContainer,
} from "./BlogRead.styles";

import PostHeaderComponent from "./postHeaderComponen/PostHeader.component";
import PostContentComponent from "./postContentComponents/PostContent.component";
import PostTagsComponent from "./postTagsComponent/PostTags.component";
import { getDisqusConfig, getDisqusShortname } from "../../utils/disqus.utils";
import CustomLoaderComponent from "../commons/loader/CustomLoader.component";
import { RootState } from "../../redux/index";
import { getPostThunk } from "../../redux/post/thunks";

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
  const refContent = useRef<HTMLDivElement>(null);
  const id: string = router.query.id as string;
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", HandleScrllEvent);
    return () => {
      window.removeEventListener("scroll", HandleScrllEvent);
    };
  }, []);

  const HandleScrllEvent = () => {
    const { top, height }: any = refContent.current?.getBoundingClientRect();

    if (-(height - 1000) > top) setShow(false);
    else if (top < 0) setShow(true);
    else if (top > 0) setShow(false);
  };

  const { loading, error, data } = useQuery(GET_BLOG, {
    variables: { id },
  });
  if (loading) return <CustomLoaderComponent type="Bars" />;
  const post = data.selectPost;
  const { title, tags, createdAt, imgUrl } = post;

  return (
    <PostContainer>
      <PostHeaderComponent title={title} createdAt={createdAt} />
      {imgUrl ? <ImageContainer imgUrl={imgUrl} /> : ""}
      <MainContainer>
        <PostContentComponent
          post={post}
          isShow={isShow}
          refContent={refContent}
        />
        <PostTagsComponent tags={tags} />
        <BottomShareContainer>
          <BottomShareComponent isShow={!isShow} direction="row" />
        </BottomShareContainer>
        <DisqusContainer>
          <Disqus.DiscussionEmbed
            shortname={getDisqusShortname}
            config={getDisqusConfig(id, post.title)}
          />
        </DisqusContainer>
      </MainContainer>
    </PostContainer>
  );
};

export default BlogReadComponent;
