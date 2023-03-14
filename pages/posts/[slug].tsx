import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Posts = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="page">
      <h1>{slug}</h1>
      <p>This is a paragraph.</p>
    </div>
  );
};

export default Posts;
