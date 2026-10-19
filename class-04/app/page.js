import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <h1 className="text-4xl">Home</h1>
      {/* <img src="/image.jpg" className="w-[300px]" alt="" /> */}
      <Image src="/image.jpg" width={400} height={300} alt="Studing image" />
    </div>
  );
};

export default Home;
