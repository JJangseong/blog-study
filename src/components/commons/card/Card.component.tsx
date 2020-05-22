import { NextPage } from "next";

import {
  CardContainer,
  CardHeading,
  CardContentContainer,
  CardContent,
  CardDate,
  CardTitle,
  CardButton,
} from "./Card.style";
import Link from "next/link";

type CardProps = {
  title: string;
  content: string;
  buttonTitle: string;
  url?: any;
  urlType?: string;
  date: string;
  imgSrc?: string;
};

const Card: NextPage<CardProps> = ({
  title,
  date,
  imgSrc,
  content,
  buttonTitle,
  url,
  urlType,
}) => {
  const portfolioButton = () => {
    return url ? (
      <CardButton inverted={true} onClick={() => (location.href = url)}>
        {buttonTitle}
      </CardButton>
    ) : (
      <Link href={"#"}>
        <CardButton inverted={true}>{buttonTitle}</CardButton>
      </Link>
    );
  };

  const boardButton = () => {
    return url ? (
      <Link href={url}>
        <CardButton inverted={true}>{buttonTitle}</CardButton>
      </Link>
    ) : (
      <Link href={"#"}>
        <CardButton inverted={true}>{buttonTitle}</CardButton>
      </Link>
    );
  };

  return (
    <CardContainer>
      <CardHeading imgSrc={imgSrc} />
      <CardContentContainer>
        <CardTitle>{title}</CardTitle>
        <CardDate>{date}</CardDate>
        <CardContent>{content}</CardContent>
        {urlType === "P" ? portfolioButton() : ""}

        {urlType === "B" ? boardButton() : ""}
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
