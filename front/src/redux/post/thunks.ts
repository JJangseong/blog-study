import { Dispatch } from "redux";
import { getPostAsync } from "./actions";
import gql from "graphql-tag";

const GET_POST = gql`
  query getBlog($id: String) {
    selectPost(id: $id) {
      id
      title
      content
      imgUrl
      url
      tags {
        id
        content
      }
      createdAt
    }
  }
`;

export function getPostThunk(id: string) {
  return async (dispatch: Dispatch, getState: any, client: any) => {
    const { request, success, failure } = getPostAsync;
    console.log(getState().post.post);
    dispatch(request(id));
    try {
      const request = await client.query({
        query: GET_POST,
        variables: {
          id,
        },
        fetchPolicy: "no-cache",
      });
      const reuslt = await request;
      dispatch(success(reuslt.data.selectPost));
    } catch (error) {
      dispatch(failure({ id, error }));
    }
  };
}
