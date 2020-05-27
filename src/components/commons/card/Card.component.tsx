import { NextPage } from "next";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { getPostThunk } from "../../../redux/post/thunks";
import { IconComponent, UndefindeTitle, UndefindeContent } from "./Card.style";

import {
  CardContainer,
  CardHeading,
  CardContentContainer,
  CardContent,
  CardDate,
  CardTitle,
  CardButton,
  CommentCountContainer,
  CommentCount,
  InfoContainer,
  CardHadingContainer,
  UndefindeImgContainer,
} from "./Card.style";

import {
  getDisqusConfig,
  getDisqusShortname,
} from "../../../utils/disqus.utils";

type CardProps = {
  id: string;
  title: string;
  content: string;
  buttonTitle: string;
  url?: any;
  urlType?: string;
  date: string;
  imgSrc?: string;
};

const Card: NextPage<CardProps> = ({
  id,
  title,
  date,
  imgSrc,
  content,
  buttonTitle,
  url,
  urlType,
}) => {
  const dispatch = useDispatch();

  return imgSrc ? (
    <CardContainer isLong={Number(id) % 2 === 1 ? true: false}>
      <CardHadingContainer>
        <Link href={url}>
          <CardHeading imgSrc={imgSrc} />
        </Link>
      </CardHadingContainer>
      <CardContentContainer>
        <CardTitle>
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </CardTitle>
        <InfoContainer>
          {urlType === "B" ? (
            <CommentCountContainer>
              <CommentCount
                shortname={getDisqusShortname}
                config={getDisqusConfig(id, title)}
              ></CommentCount>
            </CommentCountContainer>
          ) : (
            ""
          )}

          <CardDate>{date}</CardDate>
        </InfoContainer>
        <CardContent>{content}</CardContent>
      </CardContentContainer>
    </CardContainer>
  ) : (
    <UndefindeImgContainer>
      <IconComponent />
      <UndefindeTitle>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </UndefindeTitle>
      <InfoContainer>
        {urlType === "B" ? (
          <CommentCountContainer>
            <CommentCount
              shortname={getDisqusShortname}
              config={getDisqusConfig(id, title)}
            ></CommentCount>
          </CommentCountContainer>
        ) : (
          ""
        )}

        <CardDate>{date}</CardDate>
      </InfoContainer>
      <UndefindeContent>{content}</UndefindeContent>
    </UndefindeImgContainer>
  );
};

export default Card;
