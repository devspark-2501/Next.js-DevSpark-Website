export default function InfoDB() {
    return (
        <div className="min-h-screen bg-gray-950 text-white flex pt-20">

            {/* Left Side */}
            <div className="hidden md:flex w-1/2 flex-col justify-center px-16 bg-gradient-to-br from-gray-950 to-gray-950">
                <h1 className="text-5xl font-bold mb-6 leading-tight text-blue-500">
                    Join Our Developer Community 🚀
                </h1>
                <p className="text-gray-400 text-lg max-w-md">
                    Tell us who you are, what you build, and your tech stack.
                    We showcase amazing developers like you.
                </p>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 flex items-start justify-center px-6 pt-10 pb-10 shadow-2xl rounded-4xl">
                <div className="w-full max-w-xl space-y-6">

                    <h2 className="text-3xl font-semibold">
                        Your Info
                    </h2>

                    <form className="space-y-5">

                        <div>
                            <label className="text-gray-400">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full mt-1 p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-400">What do you do?</label>
                            <input
                                type="text"
                                placeholder="Frontend Dev, Student..."
                                className="w-full mt-1 p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-400">Tech Stack</label>
                            <input
                                type="text"
                                placeholder="React, Node, MongoDB..."
                                className="w-full mt-1 p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-400">GitHub Username</label>
                            <input
                                type="text"
                                placeholder="yourusername"
                                className="w-full mt-1 p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-gray-400">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Write something..."
                                className="w-full mt-1 p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
                        >
                            Submit
                        </button>

                    </form>
                </div>
            </div>

        </div>
    );
}