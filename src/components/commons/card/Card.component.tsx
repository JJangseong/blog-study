import { NextPage } from "next";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { getPostThunk } from "../../../redux/post/thunks";

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

  const portfolioButton = () => {
    return url ? (
      <CardButton inverted={true} onClick={() => (location.href = url)}>
        {buttonTitle}
      </CardButton>
    ) : (
      <CardButton inverted={true}>{buttonTitle}</CardButton>
    );
  };

  const boardButton = () => {
    return url ? (
      <Link href={url} as={url}>
        <CardButton inverted={true}>{buttonTitle}</CardButton>
      </Link>
    ) : (
      <CardButton inverted={true}>{buttonTitle}</CardButton>
    );
  };

  return (
    <CardContainer>
      <CardHeading imgSrc={imgSrc} />
      <CardContentContainer>
        <CardTitle>{title}</CardTitle>
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
        {urlType === "P" ? portfolioButton() : ""}

        {urlType === "B" ? boardButton() : ""}
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
