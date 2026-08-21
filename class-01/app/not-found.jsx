import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found!</h1>
      <p>Please head back to home page</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFound;
