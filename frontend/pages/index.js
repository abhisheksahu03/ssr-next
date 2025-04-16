import Head from 'next/head';
import BlogCard from '../components/BlogCard';

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>SSR Blog Homepage</title>
        <meta name="description" content="A fully SSR blog page using Next.js and Node.js API." />
        <meta property="og:title" content="SSR Blog Homepage" />
        <meta property="og:description" content="A fully SSR blog page using Next.js and Node.js API." />
        <meta property="og:image" content={blogs[0]?.image} />
        <meta property="og:url" content="http://localhost:3000" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>Latest Blogs</h1>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/blogs');
  const blogs = await res.json();

  return {
    props: { blogs },
  };
}
