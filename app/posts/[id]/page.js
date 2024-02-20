import singlePost from "@/lib/singlePost";

export default async function Post({ params }) {
  const { id } = params;
  const { title, body } = await singlePost(id);
  return (
    <div>
      <p className="my-4 text-blue-600 font-bold">{title}</p>
      <p>{body}</p>
    </div>
  );
}
