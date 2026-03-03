import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-950 text-white min-h-[80vh] flex items-center">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
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

        <div className="flex justify-center">
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
    </div>
  )
}