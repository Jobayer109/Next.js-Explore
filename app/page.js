import Button from "./components/button";

export default function Home() {
  return (
    <main>
      <div className="my-20">
        <p>
          Next.js is a React framework for building full-stack web applications.
          You use React Components to build user interfaces, and Next.js for
          additional features and optimizations. Under the hood, Next.js also
          abstracts and automatically configures tooling needed for React, like
          bundling, compiling, and more. This allows you to focus on building
          your application instead of spending time with configuration.
        </p>
        <br />
        <a href="www.google.com" target="blank">
          <Button text={"Explore more"}></Button>
        </a>
      </div>
    </main>
  );
}
