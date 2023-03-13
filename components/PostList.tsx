import React from "react";
import { PostsInterface } from "@/pages";

interface PostsInterfaceProps {
  posts: PostsInterface;
  setPosts: (posts: PostsInterface[]) => void;
}

const PostList: React.FC<PostsInterfaceProps> = (props) => {
  const { heading } = props;

  return <div>{heading}</div>;
};

export default PostList;
