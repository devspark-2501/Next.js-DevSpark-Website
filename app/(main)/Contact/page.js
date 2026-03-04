export default function Contact() {
  return (
    <div className="bg-gray-950 text-white min-h-[80vh] flex items-center">
      
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        <h1 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-blue-500">Me</span>
        </h1>

        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          
          <form className="space-y-6">
            
            <div>
              <label className="block mb-2 text-gray-400">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
            >
              Send Message 🚀
            </button>
          </form>

        </div>

      </div>
    </div>
  )
}