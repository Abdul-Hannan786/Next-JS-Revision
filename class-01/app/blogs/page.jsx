import Link from "next/link";
import React, { Suspense } from "react";
import Views from "../Components/Views";
import Comments from "../Components/Comments";
import Likes from "../Components/Likes";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <Link href="/">Home</Link>

      <p>Blog 1</p>
      <p>Blog 2</p>
      <p>Blog 3</p>

      <Suspense fallback={<div>Loding Views</div>}>
        <Views />
      </Suspense>
      <Suspense fallback={<div>Loding Likes</div>}>
        <Likes />
      </Suspense>
      <Suspense fallback={<div>Loding Comments</div>}>
        <Comments />
      </Suspense>
    </div>
  );
};

export default Blogs;
