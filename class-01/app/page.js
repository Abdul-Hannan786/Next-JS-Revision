import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>Hello Wolrd</h1>
    <Link href="/services">Services</Link>
    <br />
    <Link href="/blogs">Blogs</Link>
   </div>
  );
}
