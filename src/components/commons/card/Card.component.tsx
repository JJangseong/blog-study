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
}) => {
  console.log(url)
  return (
    <CardContainer>
      <CardHeading imgSrc={imgSrc} />
      <CardContentContainer>
        <CardTitle>{title}</CardTitle>
        <CardDate>{date}</CardDate>
        <CardContent>{content}</CardContent>
        {url ? (
          <CardButton inverted={true} onClick={() => location.href=url}>{buttonTitle}</CardButton>
        ) : (
          <Link href={"#"}>
            <CardButton inverted={true}>{buttonTitle}</CardButton>
          </Link>
        )}
      </CardContentContainer>
    </CardContainer>
  );
};

export default Card;
