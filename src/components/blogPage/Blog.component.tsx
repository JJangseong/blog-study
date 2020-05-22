import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

import SideNavComponent from "./sideNavComponent/SideNav.component";

import { BlogContainer } from "./Blog.style";

import CardListComponent from "./cartListComponent/CartList.component";


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
  const router = useRouter();
  const {
    push,
    query: { tag },
  } = router;

  const { loading, error, data } = useQuery(GET_BLOGS, {
    variables: { tag, type: "B" },
  });


  return (
    <BlogContainer>
      <SideNavComponent push={push} tag={tag as string}/>
      <CardListComponent posts={data} loading={loading}/>
    </BlogContainer>
  );
};

export default BlogPageComponent;
