import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center gap-3">
      <h1 className="text-4xl">Home Page</h1>
      <Link className="text-blue-400 text-xl" href="/about">About</Link>
      <Link className="text-blue-400 text-xl" href="/services">Services</Link>
    </div>
  );
};

export default page;
