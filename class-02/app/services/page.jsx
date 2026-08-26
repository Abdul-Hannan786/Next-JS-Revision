import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen gap-4">
      <h1 className="text-4xl">Services</h1>
      <Link className="text-blue-400 text-xl" href="/">Home</Link>
    </div>
  );
};

export default Services;
