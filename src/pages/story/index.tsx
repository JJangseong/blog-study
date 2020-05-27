import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostThunk } from "../../redux/post/thunks";
import { RootState } from "../../redux/index";

const StoryPage: NextPage = () => {
  const dispatch = useDispatch();
  const post = useSelector((state: RootState) => state.post.post[16]);

  useEffect(() => {
    dispatch(getPostThunk("16"));
  }, []);

  return <div>StoryPage</div>;
};

export default StoryPage;


// <Provider store={test}></Provider>