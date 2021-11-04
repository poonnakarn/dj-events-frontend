import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>About</h1>
      <p>Test Index</p>
      <Link href="/about">About</Link>
    </div>
  );
}
