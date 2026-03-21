import InfoDB from "@/app/Component/InfoDB"

export const metadata = {
  title: 'About | DevSpark Website'
}

export default function About() {
  return (
    <div className="bg-gray-950 text-white">

      {/* About Section */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About This Project
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            Building projects daily and improving step by step 🚀
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-semibold mb-3 text-blue-400">
                My Goal
              </h2>
              <p className="text-gray-300">
                I am building consistent projects to improve my development 
                skills and maintain my GitHub contribution graph daily.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-semibold mb-3 text-purple-400">
                Technologies
              </h2>
              <p className="text-gray-300">
                This project is built using React / Next.js and styled 
                with Tailwind CSS for modern UI design.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Full-width Form Section (NO GAP NOW) */}
      <InfoDB /> {/* connect the DB page, more like an form */}

    </div>
  )
}