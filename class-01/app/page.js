import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>Technical Agency</h1>
    <Link href="/services">Services</Link>
    <br />
    <Link href="/blogs">Blogs</Link>
      <br />
    <Link href="/about">About</Link>
   </div>
  );
}
