'use client'
import { useState } from "react";
import Link from "next/link";
import Hero from "./Component/Hero"; // Hero section component
import CircleError from "./Component/CircleError";
import CircleChat from "./Component/CircleChat";
import Review from "./Component/Review";
import Estore from "./Component/EStore";
import ShoppingIcon from "./Component/ShoppingIcon";

export default function Home() {
  // const [crash, setCrash] = useState(false);

  // if (crash) {
  //   throw new Error('YOU Crased the page')
  // }
  // // const [crash, setCrash] = useState(false)

  // // if (crash) {
  // //   throw new Error("You crashed the page!")
  // // }

  return (
    <div className="bg-gray-950 text-white">

      <div className="max-w-6xl mx-auto px-6 min-h-[80vh] flex items-center">

        <div className="flex flex-col md:flex-row gap-12 w-full items-center">

          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build. Learn. <span className="text-blue-500">Create.</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              Welcome to DevSpark 🚀  
              This is where I build projects, explore Next.js, and improve my development skills every day.
            </p>

            <div className="mt-8 flex gap-6">
              <Link href='/Projects' className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg">View Projects</Link>

              <Link href='/Contact' className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-xl font-semibold transition duration-300">Contact Me</Link>
            </div>
          </div>

          <div className="flex justify-center flex-1">
            <div className="w-72 h-72 bg-blue-600/20 rounded-full blur-3xl absolute"></div>
            <div className="relative bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
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

        {/* <div className="absolute top-180 ">
          View Our, <br />
          <span>Image Gallery</span>
        </div> */}

      </div>

      <Hero /> {/* Hero section componenet */}
      
      <Review /> {/* same HereSection 2 */}

      <Estore /> {/* ecommerce section of the site!! */}
      {/* <h1>Homepage</h1>
      <button onClick={() => setCrash(true)}>
        Crash the page
      </button> */}

      <CircleError /> {/* that random error page link, specfic for home page */}
      <CircleChat /> {/* same with the chat button */}
      <ShoppingIcon /> {/* adds the shopping icon page!! */}

    </div>
  )
}