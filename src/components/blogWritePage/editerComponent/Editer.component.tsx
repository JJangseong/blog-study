import dynamic from "next/dynamic";
import MarkdownIt from "markdown-it";
import moment from "moment";
import { ChangeEvent, useRef } from "react";
import { NextPage } from "next";

import {
  getMdParser,
  PLUGINS,
  getMarkConfig,
} from "../../../utils/Markdwon.utils";

import { EditerContainer } from "./Editer.styles";
import { uploadImage, formatFileName } from "../../../utils/upload";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

type EditerProps = {
  handleEditorChange: any;
  content: string;
  refFileInput: any;
  handleFileChange: any;
};

const EditerComponent: NextPage<EditerProps> = ({
  handleEditorChange,
  content,
  refFileInput,
  handleFileChange,
}) => {
  const mdParser: MarkdownIt = getMdParser();
  const RefFileInput = useRef<HTMLInputElement>(null);

  const textFunction = (text: string) => {
    return mdParser.render(text);
  };

  const handleImageUpload = async (file: File) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (data) => {
        const fileName = formatFileName(file.name);
        const result = await uploadImage(file, fileName);
        console.log(result);
        // @ts-ignor
        resolve(
          `https://sungjin-log-file-server.s3.ap-northeast-2.amazonaws.com/${fileName}`
        );
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <EditerContainer>
      <MdEditor
        value={content}
        style={{ height: "100%", border: "none" }}
        renderHTML={(text) => textFunction(text)}
        onImageUpload={handleImageUpload}
        plugins={PLUGINS}
        config={getMarkConfig}
        onChange={handleEditorChange}
      />
      <input
        type="file"
        name="file"
        id="file"
        style={{ display: "none" }}
        ref={refFileInput}
        onChange={handleFileChange}
      />
    </EditerContainer>
  );
};

export default EditerComponent;
