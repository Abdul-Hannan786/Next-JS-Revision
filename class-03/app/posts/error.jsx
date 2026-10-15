"use client";

import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

const Error = ({ error, reset }) => {
  console.log(error);
  const router = useRouter();
  return (
    <div>
      <p>Something Went Wrong</p>
      <button
        onClick={() => {
          startTransition(() => {
            
          });
        }}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
