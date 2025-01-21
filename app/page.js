import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="main">
      <h1 className="text-xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className="">Week 2 - Assignment</Link>
    </div>
  );
}
