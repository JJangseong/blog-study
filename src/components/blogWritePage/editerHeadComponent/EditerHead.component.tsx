import { NextPage } from "next";
import { InputTag } from '../../../types/tag';

import {
  EditerHeaderContainer,
  TitleContainer,
  TagContainer,
  TitleInput,
  TagInput,
  TagItem,
} from "./EditerHead.styles";

type EditerHeadProps = {
  handleInputChange: any;
  handleTagKeyPress: any;
  handleTagClick: any;
  title: string;
  tag: string;
  tags: InputTag[];
};

const EditerHeadComponent: NextPage<EditerHeadProps> = ({
  handleInputChange,
  handleTagKeyPress,
  handleTagClick,
  title,
  tag,
  tags,
}) => {
  return (
    <EditerHeaderContainer>
      <TitleContainer>
        <TitleInput
          placeholder="제목을 입력해 주세요."
          name="title"
          value={title}
          onChange={handleInputChange}
        />
      </TitleContainer>
      <TagContainer>
        {tags.map((tag, index) => (
          <TagItem key={index} onClick={(e) => handleTagClick(e, index)}>{tag.content}</TagItem>
        ))}

        <TagInput
          placeholder={`${tags.length === 0 ? "태그를 입력해 주세요.": "태그를 클릭하면 지워집니다."}`}
          name="tag"
          value={tag}
          onChange={handleInputChange}
          onKeyPress={handleTagKeyPress}
        />
      </TagContainer>
    </EditerHeaderContainer>
  );
};

export default EditerHeadComponent;
