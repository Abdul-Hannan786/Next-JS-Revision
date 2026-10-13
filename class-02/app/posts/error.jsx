"use client";

import React from "react";

const Error = ({ error }) => {
  console.log(error);
  return (
    <div>
      <p>{error}</p>
    </div>
  );
};

export default Error;
