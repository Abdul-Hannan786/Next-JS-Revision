"use client";

import ServiceItem from "./ServiceItem";

export default function ServiceList({ children }) {
  
  return (
    <>
      <h3 className="font-bold">All Services List</h3>
      <ul className="services-list">
        {children}
      </ul>
    </>
  );
}
