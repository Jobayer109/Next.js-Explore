import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <main>
      <ul className="flex gap-3 mt-2">
        <li>
          <Link href="/about/mission">Mission</Link>
        </li>
        <li>
          <Link href="/about/vision">Vision</Link>
        </li>
      </ul>
      {children}
    </main>
  );
}
