import Head from 'next/head';

export default function BlogDetail({ blog }) {
  if (!blog) return <p>Blog not found</p>;

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.content.slice(0, 150)} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.content.slice(0, 150)} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:url" content={`http://localhost:3000/blog/${blog.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
        <p>{blog.content}</p>
        <p><strong>Author:</strong> {blog.author}</p>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
  const blog = await res.ok ? await res.json() : null;

  return { props: { blog } };
}
