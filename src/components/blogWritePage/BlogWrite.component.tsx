import { NextPage } from "next";
import {
  useState,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useRef,
} from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useRouter } from "next/dist/client/router";

import { BlogWriteContainer, EditerContainer } from "./BlogWrite.styles";

import EditerComponent from "./editerComponent/Editer.component";
import EditerHeadComponent from "./editerHeadComponent/EditerHead.component";
import EdtierFooterComponent from "./editerFooterComponent/EditerFooer.component";

import { InputTag } from "../../types/tag";
import { uploadImage, formatFileName } from '../../utils/upload';

const INSERT_POST = gql`
  mutation insertPost(
    $title: String!
    $content: String!
    $write: String!
    $type: String!
    $imgUrl: String
    $tags: [InputTag]
  ) {
    insertPost(
      title: $title
      content: $content
      write: $write
      type: $type
      imgUrl: $imgUrl
      tags: $tags
    )
  }
`;

const BlogWriteComponent: NextPage = () => {
  const router = useRouter();
  const [insertPost, { data }] = useMutation(INSERT_POST);
  const [inputs, setInputs] = useState({
    title: "",
    tag: "",
    imgUrl: "",
  });
  const [tags, setTags] = useState<InputTag[]>([]);
  const [content, setContent] = useState("");
  const refFileInput = useRef<HTMLInputElement>(null);
  const { title, tag, imgUrl } = inputs;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleEditorChange = (
    it: { text: string; html: string },
    event: any
  ) => {
    setContent(it.text);
  };

  const handleFileClick = () => {
    refFileInput.current?.click();
  };

  const handleFileChange = async () => {
    const files = refFileInput.current?.files;
    if (!files) return;
    const file = files[0];
    const fileName: string = formatFileName(file.name);
    
    const result: any = await uploadImage(files[0], fileName);
    console.log(result);

    setInputs({ ...inputs, imgUrl: `https://sungjin-log-file-server.s3.ap-northeast-2.amazonaws.com/${fileName}` });
    alert("썸네일이 등록되었습니다.");
  };

  const handleTagKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key === "Enter" && tag !== "" && tags.length < 5) {
      setTags([...tags, { content: tag }]);
      setInputs({ ...inputs, tag: "" });
    }
  };

  const handleTagClick = (
    e: MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setTags(tags.filter((data, idx) => idx !== index));
  };

  const handleSave = async () => {
    const { data } = await insertPost({
      variables: {
        title,
        content,
        tags,
        imgUrl,
        write: "장성진",
        type: "B",
      },
    });

    if (data) router.push("/blog");
  };

  return (
    <BlogWriteContainer>
      <EditerHeadComponent
        handleInputChange={handleInputChange}
        handleTagKeyPress={handleTagKeyPress}
        handleTagClick={handleTagClick}
        title={title}
        tag={tag}
        tags={tags}
      />
      <EditerContainer>
        <EditerComponent
          handleEditorChange={handleEditorChange}
          content={content}
          refFileInput={refFileInput}
          handleFileChange={handleFileChange}
        />
      </EditerContainer>
      <EdtierFooterComponent
        handleSave={handleSave}
        handleFileClick={handleFileClick}
      />
    </BlogWriteContainer>
  );
};

export default BlogWriteComponent;
