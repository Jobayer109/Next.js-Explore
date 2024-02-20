export default async function getAllPosts() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  if (!result.ok) {
    throw new Error("Something went wrong with data fetching");
  }
  return result.json();
}
