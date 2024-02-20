"use client";

export default function Button({ text, customStyle }) {
  const style = {
    backgroundColor: "black",
    color: "white",
    padding: ".5rem 1rem",
    border: "1px solid gray",
    borderRadius: "5px",
    ...customStyle,
  };
  return (
    <main>
      <button onClick={() => console.log("Button clicked")} style={style}>
        {text}
      </button>
    </main>
  );
}
