import { NextPage } from "next";
import { useState, ChangeEvent } from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";

import {
  PortfolioContainer,
  ContentContainer,
  HeadingContainer,
  HeadingImage,
  HeadingTitle,
  Button,
} from "./Portfolio.styles";

import Card from "../commons/card/Card.component";

import headingImg from "../../assets/images/portfolio_main.jpg";
import ModalComponent from "../commons/modal/Modal.component";

const GET_PORTFOLIOS = gql`
  query getPortfolios($tag: String, $type: String) {
    selectPostList(tag: $tag, type: $type) {
      id
      title
      content
      imgUrl
      url
      createdAt
    }
  }
`;

const PortfolioPageComponent: NextPage = () => {
  const [inputs, setInputs] = useState({
    title: "",
    url: "",
    desc: "",
    imgData: "",
  });
  const [isShow, setShow] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  const handleModal = () => {
    setShow(!isShow);
  };
  const { loading, error, data } = useQuery(GET_PORTFOLIOS, {
    variables: { tag: "", type: "P" },
  });

  if (loading) return <p>Loading ...</p>;
  const portfolioList = data.selectPostList;
  console.log(portfolioList);
  return (
    <PortfolioContainer>
      <HeadingContainer>
        <HeadingImage />
        <HeadingTitle>Portfolio</HeadingTitle>
        <Button onClick={handleModal}>Add Portfoilo</Button>
      </HeadingContainer>
      <ContentContainer>
        {portfolioList
          ? portfolioList.map(({ id, title, content, url, createdAt }: any) => {
              return (
                <Card
                  id={id}
                  title={title}
                  key={id}
                  content={content}
                  date={createdAt}
                  imgSrc={headingImg}
                  buttonTitle="Go Page"
                  url={url}
                  urlType="P"
                />
              );
            })
          : ""}
      </ContentContainer>
      <ModalComponent
        isShow={isShow}
        handleInputChange={handleInputChange}
        inputs={inputs}
        handleModal={handleModal}
      />
    </PortfolioContainer>
  );
};

export default PortfolioPageComponent;
