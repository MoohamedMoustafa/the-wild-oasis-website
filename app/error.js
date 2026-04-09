"use client";

export default function Error({ error, reset }) {
  console.log(error.message);

  // This file handles errors that occur during React rendering lifecycle methods,
  // server-side rendering (SSR), and data fetching methods (e.g., getServerSideProps, getStaticProps).
  // It does NOT handle errors in event handlers, asynchronous callbacks, unhandled Promise rejections, or rootLayout error.

  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">ERROR!</p>

      <button
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
