import { NextPage } from "next";
import { useRouter, NextRouter } from "next/dist/client/router";
import Router from "next/router";
import Disqus from "disqus-react";
import gql from "graphql-tag";
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
import { Post } from "../../types/post";
import { Tag } from "../../types/tag";

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
  const dispatch = useDispatch();
  const id: string = router.query.id as string;
  const result = useSelector((state: RootState) => state.post.post[id]);
  const [isShow, setShow] = useState(true);

  useEffect(() => {
    dispatch(getPostThunk(Router.query.id as string));

    window.addEventListener("scroll", HandleScrllEvent);
    return () => {
      window.removeEventListener("scroll", HandleScrllEvent);
    };
  }, []);

  const HandleScrllEvent = () => {
    const { top, height }: any = refContent.current?.getBoundingClientRect();

    if (-(height - 1000) > top) setShow(false);
    else if (top < 0) setShow(true);
    // else if (top > 0) setShow(false);
  };

  if (!result || result.loading) return <CustomLoaderComponent type="Bars" />;
  
  const post = result.data;
  const { title, tags, createdAt, imgUrl } = post as Post;

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
            config={getDisqusConfig(id, title)}
          />
        </DisqusContainer>
      </MainContainer>
    </PostContainer>
  );
};

export default BlogReadComponent;
