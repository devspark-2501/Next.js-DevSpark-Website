import Link from "next/link"

export default function AboutSlug({ params }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl p-10 max-w-2xl w-full text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About{" "}
          <span className="text-gray-400">/</span>{" "}
          <span className="text-white">{params.slug}</span>
        </h1>

        <div className="h-px w-24 bg-gray-700 mx-auto mb-6"></div>

        <p className="text-gray-400 leading-relaxed text-base">
          This page does not exist in the main website structure. It is simply an extra dynamic page created to demonstrate how routing works inside the About section. When you type anything after <span className="text-gray-200 font-medium">/about/</span> in the URL, this page automatically appears without creating multiple files. It captures the parameter and displays it dynamically.
        </p>

        <Link
          href="/About"
          className="inline-block mt-8 px-6 py-2.5 rounded-lg border border-gray-700 hover:opacity-70 transition-all duration-300"
        >Back to About</Link>

      </div>
    </div>
  )
}