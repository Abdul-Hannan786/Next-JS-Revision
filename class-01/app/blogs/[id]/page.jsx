import React from "react";

const BlogDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(await params);
  
  return <div>BlogDetailsPage {id}</div>;
};

export default BlogDetailsPage;
