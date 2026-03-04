export const metadata = {
  title: 'Projects | DevSpark Website'
}

export default function Projects() {
  const projects = [
    {
      title: "Movie App",
      description: "A movie search app using API integration and dynamic UI.",
      tech: "React, Tailwind CSS",
    },
    {
      title: "Task Manager",
      description: "A simple productivity app to manage daily tasks.",
      tech: "Next.js, Local Storage",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills.",
      tech: "Next.js, Tailwind CSS",
    },
    {
      title: "Weather App",
      description: "Real-time weather updates using external API.",
      tech: "React, REST API",                                                                
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
        <p className="text-gray-400 text-lg mb-12">
          Some of the projects I’ve built while learning and improving daily 🚀
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-gray-800"
            >
              <h2 className="text-2xl font-semibold mb-3 text-blue-400">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <span className="text-sm text-gray-500">{project.tech}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-500">
          More projects coming soon...
        </div>
      </div>
    </div>
  );
}
