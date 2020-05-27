import Head from "next/head";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import BlogReadComponent from "../../components/blogReadPage/BlogRead.component";

const Post: NextPage = () => {
  return <BlogReadComponent />;
};

export default Post;

// export default function Post({
//   postData
// }: {
//   postData: {
//     title: string
//     date: string
//     contentHtml: string
//   }
// }) {
//   return (
//     <Layout>
//       <Head>
//         <title>{postData.title}</title>
//       </Head>
//       <article>
//         <h1 className={utilStyles.headingXl}>{postData.title}</h1>
//         <div className={utilStyles.lightText}>
//           <Date dateString={postData.date} />
//         </div>
//         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//       </article>
//     </Layout>
//   )
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// 포스트 조회
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const postData = await getPostData(params.id as string)
//   return {
//     props: {
//       postData
//     }
//   }
// }
