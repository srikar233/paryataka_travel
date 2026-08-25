"use client";

import { useRouter } from "next/navigation";

export default function BookButton({ slug }) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="bookButton"
      onClick={() => router.push(`/tripDetails/${slug}`)}
    >
      Book
    </button>
  );
}