"use client";

import React, { useState } from "react";

const About = () => {
  const [fruits, setFruits] = useState(["Mango, Apple, Pineapple"]);

  return (
    <>
      <h1 className="text-4xl">About Page</h1>
      <button onClick={() => setFruits(null)}>Click Me</button>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </>
  );
};

export default About;
