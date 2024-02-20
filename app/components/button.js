"use client";

export default function Button({ text }) {
  return (
    <main>
      <button
        onClick={() => console.log("Button clicked")}
        className="bg-black text-white px-3 py-1 rounded"
      >
        {text}
      </button>
    </main>
  );
}
