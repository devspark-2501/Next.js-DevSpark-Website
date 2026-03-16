'use client'

import Link from "next/link";

export default function Hero() {
  // const navigate = usenavi
  return (
    <section className="bg-gray-950 text-white min-h-screen relative pt-10 px-10 mb-20">

      <div className="max-w-md">
        <h1 className="text-gray-400 text-lg border-l-2 pl-5 border-gray-600 absolute left-50">
          View Our,
          <br />

          <span className="leading-tight font-bold text-6xl text-blue-500 block">
            Image Gallery
          </span>
        </h1>

        <p className="mt-30 text-gray-400 absolute left-55">
          Explore our collection of beautiful images showcasing
          creativity, design and inspiration.
        </p>
      </div>

      <Link href="/ImageGallery">
        <img
          // onClick={}
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          className="w-40 h-60 object-cover rounded-2xl absolute left-250 top-80 hover:scale-110 transition duration-300 cursor-pointer"
        />
      </Link>

      <Link href="/ImageGallery">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="w-50 h-72 object-cover rounded-2xl absolute left-295 top-100 hover:scale-110 transition duration-300 cursor-pointer"
        />
      </Link>

      <Link href="/ImageGallery">
        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          className="w-40 h-60 object-cover rounded-2xl absolute top-145 left-250 hover:scale-110 transition duration-300 cursor-pointer"
        />
      </Link>

      <Link href="/ImageGallery">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
          className="w-40 h-60 object-cover rounded-2xl absolute top-110 left-205 hover:scale-110 transition duration-300 cursor-pointer"
        />
      </Link>

    </section>
  )
}