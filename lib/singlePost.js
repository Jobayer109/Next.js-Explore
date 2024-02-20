export default function singlePost(id) {
  const post = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return post.json();
}
