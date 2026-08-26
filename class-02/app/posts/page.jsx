"use client";

import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const {posts} = await response.json();
    setPosts(posts);
    console.log(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Recent Posts</h1>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {posts?.map(({ id, title, body }) => (
          <div key={id} className="shadow p-6 rounded-xl bg-mist-800 hover:scale-103 transition cursor-pointer">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-5 text-[16px]">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
