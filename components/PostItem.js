import React from "react";
import Link from "next/link";
import postStyles from "../styles/Posts.module.css";
const Post = ({ post }) => {
  const excerpt = "Something short about the post goes here";
  const myDate = new Date(post.published_at).toLocaleDateString();

  return (
    <Link href="/post/[slug]" as={`/post/${post.slug}`}>
      <a className={postStyles.card}>
        <h2>{post.title} &rarr; </h2>
        {post.custom_excerpt && <p>{post.custom_excerpt}</p>}
        {!post.custom_excerpt && <p>{excerpt}</p>}
        <h5> Published at: {myDate}</h5>
        <span>Read More...</span>
      </a>
    </Link>
  );
};

export default Post;