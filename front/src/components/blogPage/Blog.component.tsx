import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import { useState, ChangeEvent } from 'react';

import SideNavComponent from "./sideNavComponent/SideNav.component";
import CardListComponent from "./cartListComponent/CartList.component";

import { BlogContainer } from "./Blog.style";



const GET_BLOGS = gql`
  query getBlogs($tag: String, $type: String) {
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

const BlogPageComponent: NextPage = () => {
  const [searchInput, setSearchInput]  = useState("");
  const router = useRouter();
  const {
    push,
    query: { tag },
  } = router;

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }

  const { loading, error, data } = useQuery(GET_BLOGS, {
    variables: { tag, type: "B" },
  });


  return (
    <BlogContainer>
      <SideNavComponent push={push} tag={tag as string} handleSearchInput={handleSearchInput}/>
      <CardListComponent posts={data} loading={loading} searchInput={searchInput}/>
    </BlogContainer>
  );
};

export default BlogPageComponent;
