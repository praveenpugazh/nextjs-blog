import PostsList from "../components/PostsList";

const { BLOG_URL, CONTENT_API_KEY } = process.env;

export default function Home({ posts }) {
  return (
    <div>
      <PostsList posts={posts} />
    </div>
  );
}

const getPosts = async () => {
  const res = await fetch(`	
 ${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&limit=all`).then(
    (res) => res.json()
  );

  const posts = res.posts;

  return posts;
};
export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};
