import getAllPosts from "@/lib/allPosts";
import Link from "next/link";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <main>
      <h3>My all posts</h3>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
