import React from "react";

const File = async ({ params }) => {
  const {filePath} = await params;
//   console.log(data);
  return <h1>File /{filePath.join("/")}</h1>;
};

export default File;
