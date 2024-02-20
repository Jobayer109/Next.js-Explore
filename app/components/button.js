"use client";

export default function Button() {
  return (
    <main>
      <button
        onClick={() => console.log("Button clicked")}
        className="bg-green-400 rounded-md px-2 py-1 mt-2"
      >
        Show more
      </button>
    </main>
  );
}
