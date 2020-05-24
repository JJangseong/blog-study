import { NextPage } from "next";
import Link from "next/link";

import HomePhoto from "../../assets/images/home_main.jpg";

import { CustomButton } from '../commons/button/Button.styles';

import {
  HomePageContainer,
  LeftLayout,
  TextContainer,
  MainText,
  SubText,
  PhotoContainer,
  MainPhoto,
} from "./Home.style";

const HomePageComponent: NextPage = () => {
  return (
    <HomePageContainer>
      <LeftLayout>
        <TextContainer>
          <MainText>
            I can do everything through him who give me strength
          </MainText>
          <SubText>Philippians 4:13</SubText>
        </TextContainer>
        <Link href="/story">
          <CustomButton>Go Story</CustomButton>
        </Link>
      </LeftLayout>
      <PhotoContainer>
        <MainPhoto imgSrc={HomePhoto} />
      </PhotoContainer>
    </HomePageContainer>
  );
};

export default HomePageComponent;
