// import React from "react"
// metadata
import "./globals.css"
import Link from "next/link"
import { metadata } from "./layout"

export const metadata = {
  title: {
    // default: "DevSpark Website",
    template: "Not - Found | DevSpark Website"
  }
}

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4">     
      <h1 className="text-8xl font-extrabold from-gray-200 to-gray-500 bg-clip-text text-transparent">
        404
      </h1>

      <p className="mt-2 text-gray-400 text-lg tracking-widest uppercase">
        Page Not Found
      </p>

      <p className="text-gray-500 text-sm text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-10 px-6 py-3 bg-gray-950 text-gray-500 border-2 shadow-gray-950 shadow-2xl font-semibold rounded-3xl hover:opacity-70"
      >Go Back Home</Link>
    </div>
  )
}