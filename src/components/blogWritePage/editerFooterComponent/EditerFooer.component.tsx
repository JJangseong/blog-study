import { NextPage } from "next";

import { EditerFooterContainer, Button } from "./EditerFooter.styles";
import { useRouter } from 'next/dist/client/router';

type EditerFooterPros = {
  handleSave: any;
  handleFileClick: any;
}

const EdtierFooterComponent: NextPage<EditerFooterPros> = ({handleSave, handleFileClick}) => {
  const router = useRouter();
  
  return (
    <EditerFooterContainer>
      <Button inverted={true} onClick={() => router.back()}>뒤로가기</Button>
      <Button inverted={true} onClick={handleFileClick}>썸네일</Button>
      <Button inverted={true} onClick={handleSave}>저장</Button>
    </EditerFooterContainer>
  );
};

export default EdtierFooterComponent;
