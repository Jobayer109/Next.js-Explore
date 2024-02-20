import { notFound } from "next/navigation";

export const metadata = {
  title: "Blog ID",
  description: "This is mission page",
};

export default function SingleBlog({ params }) {
  const { id } = params;

  if (id > 3) {
    notFound();
  }

  return (
    <main>
      <p>The blog id: {id}</p>
    </main>
  );
}
