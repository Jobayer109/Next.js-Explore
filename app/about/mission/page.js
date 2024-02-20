import Button from "@/app/components/button";
import thumb from "@/images/thumb.jpg";
import Image from "next/image";

export const metadata = {
  title: "About Us | Mission",
  description: "This is mission page",
};

export default function Mission() {
  return (
    <main className="my-6">
      <h1 className="font-bold">Mission page</h1>
      <p>
        Illustrations by various artists: Cover and chapter illustrations by
        Madalina Tantareanu. Pixel art in Chapters 7 and 16 by Antonio Perdomo
        Pastor. Regular expression diagrams in Chapter 9 generated with
        regexper.com by Jeff Avallone. Village photograph in Chapter 11 by
        Fabrice Creuzot. Game concept for Chapter 16 by Thomas Palef.
      </p>

      <br />

      <Image src={thumb} alt="Thumb images" priority={100} />

      <Button
        text={"Read more"}
        className="bg-green-400 rounded-md px-2 py-1 mt-2"
      />
    </main>
  );
}
