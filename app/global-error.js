'use client'

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="bg-gray-950 text-white flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">
            Something went very wrong
          </h1>

          <p className="text-gray-400 mb-6">
            A critical error occurred in the application.
          </p>

          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-gray-950 text-gray-500 border-2 shadow-gray-950 shadow-2xl font-semibold rounded-3xl hover:opacity-70"
          >
            Reload App
          </button>
        </div>
      </body>
    </html>
  )
}