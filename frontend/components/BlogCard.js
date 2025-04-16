import Link from 'next/link';

const BlogCard = ({ blog }) => (
  <div style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
    <h2>{blog.title}</h2>
    <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
    <p>{blog.content.slice(0, 100)}...</p>
    <Link href={`/blog/${blog.id}`}>Read More</Link>
  </div>
);

export default BlogCard;
