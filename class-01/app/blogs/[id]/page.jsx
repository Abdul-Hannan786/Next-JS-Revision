import { notFound } from "next/navigation";
import React from "react";

const BlogDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(await params);

  if(!/^\d+$/.test(id)){
    notFound()
  }
  
  return <div>BlogDetailsPage {id}</div>;
};

export default BlogDetailsPage;
