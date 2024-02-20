import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 description",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Blog 3 description",
    },
  ];

  return (
    <main className="mt-6 mb-2">
      <h4>My Blogs</h4>
      <div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
