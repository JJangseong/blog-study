import { NextPage } from "next";
import dynamic from "next/dynamic";
import MarkdownIt from "markdown-it";
import { useRef, useEffect, useState } from "react";

import { getMdParser } from "../../../utils/Markdwon.utils";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

import { ContentContainer, Content } from "./PostContent.styles";

import ShareComponent from "../shareComponent/Share.component";

type PostContentPropsType = {
  post: any;
  refContent: any;
  isShow: boolean;
};

const PostContentComponent: NextPage<PostContentPropsType> = ({ post, refContent, isShow }) => {
  const mdParser: MarkdownIt = getMdParser();

  return (
    <ContentContainer>
      <ShareComponent isShow={isShow} direction="column"/>
      <Content ref={refContent}>
        <MdEditor
          value=""
          style={{ height: "100%", border: "none" }}
          renderHTML={(text) => mdParser.render(post.content)}
          plugins={[]}
          config={{
            view: {
              menu: false,
              md: false,
              html: true,
              fullScreen: false,
              hideMenu: false,
            },
          }}
        />
      </Content>
    </ContentContainer>
  );
};

export default PostContentComponent;
