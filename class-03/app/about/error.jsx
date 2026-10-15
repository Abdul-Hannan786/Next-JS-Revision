"use client";

const Error = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <p>Something Went Wrong</p>
      <button
        onClick={() => {
          reset();
        }}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
