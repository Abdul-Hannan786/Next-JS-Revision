import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <Link href="/">Home</Link>

      <p>Blog 1</p>
      <p>Blog 2</p>
      <p>Blog 3</p>
      <p>Blog 4</p>
    </div>
  );
};

export default Blogs;
