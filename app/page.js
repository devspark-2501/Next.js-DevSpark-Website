'use client'; // must be first line
import { useState } from "react";
import Link from "next/link";
import Hero from "./Component/Hero"; // Hero section component
import CircleError from "./Component/CircleError";
import CircleChat from "./Component/CircleChat";
import Review from "./Component/Review";
import Estore from "./Component/EStore";
import ShoppingIcon from "./Component/ShoppingIcon";

export default function Home() {

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col pt-24">
      {/* pt-24 added so content is visible below fixed navbar */}

      {/* Main Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12 min-h-[80vh]">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build. Learn. <span className="text-blue-500">Create.</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Welcome to DevSpark 🚀  
            This is where I build projects, explore Next.js, and improve my development skills every day.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
            <Link 
              href='/Projects' 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg text-center"
            >
              View Projects
            </Link>

            <Link 
              href='/Auth' 
              className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-xl font-semibold transition duration-300 text-center"
            >
              Auth
            </Link>
          </div>
        </div>

        {/* Focus Card */}
        <div className="flex justify-center flex-1 relative w-full md:w-auto">
          <div className="w-56 h-56 md:w-72 md:h-72 bg-blue-600/20 rounded-full blur-3xl absolute"></div>
          <div className="relative bg-gray-900 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-800 z-10 w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              🚀 Current Focus
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li>✔ Mastering Next.js App Router</li>
              <li>✔ Building Full Stack Projects</li>
              <li>✔ Improving UI with Tailwind</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Hero Section Component */}
      <Hero /> {/* Hero section component */}

      {/* Review Section */}
      <Review /> {/* same HereSection 2 */}

      {/* Safe rendering for Estore to prevent 'map of undefined' error */}
      {Estore && <Estore />} {/* ecommerce section of the site!! */}

      <CircleError /> {/* random error page link, specific for home page */}
      <CircleChat /> {/* chat button */}
      <ShoppingIcon /> {/* shopping icon page */}
    </div>
  )
}