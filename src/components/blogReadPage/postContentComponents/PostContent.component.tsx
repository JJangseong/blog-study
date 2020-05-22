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
};

const PostContentComponent: NextPage<PostContentPropsType> = ({ post }) => {
  const mdParser: MarkdownIt = getMdParser();
  const refContent2 = useRef<HTMLDivElement>(null);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", HandleScrllEvent);
    return () => {
      window.removeEventListener("scroll", HandleScrllEvent);
    };
  }, []);

  const HandleScrllEvent = () => {
    const { top, height }: any = refContent2.current?.getBoundingClientRect();

    if (-(height - 1000) > top) setShow(false);
    else if (top < 0) setShow(true);
    else if (top > 0) setShow(false);
  };

  return (
    <ContentContainer>
      <ShareComponent isShow={isShow} />
      <Content ref={refContent2}>
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
