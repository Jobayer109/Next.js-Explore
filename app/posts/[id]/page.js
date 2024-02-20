import Button from "@/app/components/button";
import singlePost from "@/lib/singlePost";
import Link from "next/link";

export default async function Post({ params }) {
  const { id } = params;
  const { title, body } = await singlePost(id);
  return (
    <div>
      <p className="my-4 text-blue-600 font-bold">{title}</p>
      <p>{body}</p>
      <Link href="/posts">
        <Button
          text="Back"
          customStyle={{
            padding: ".1rem .5rem",
            fontSize: ".7rem",
            backgroundColor: "blue",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        />
      </Link>
    </div>
  );
}
