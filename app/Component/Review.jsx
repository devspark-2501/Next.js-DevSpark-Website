'use client'
import { useState } from "react";

export default function Review() {

  // Input state for message field
  const [message, setMessage] = useState("");

  // State storing community posts
  const [UserData, setUserData] = useState([
    {
      name: "John",
      message: "This site helped me learn so much about development!"
    },
    {
      name: "Alex",
      message: "Amazing place to share ideas and grow together 🚀"
    }
  ]);

  // Function to add a new message
  const addMessage = () => {

    // Prevent empty messages
    if (message.trim() === "") return;

    // Create new post
    const newPost = {
      name: "Guest",
      message: message
    };

    // Update posts
    setUserData([...UserData, newPost]);

    // Clear input
    setMessage("");
  };

  // Delete a message
  const deleteMessage = (index) => {

    const updatedPosts = UserData.filter((_, i) => i !== index);

    setUserData(updatedPosts);
  };

  return (
    <div className="min-h-screen bg-gray-950">

      {/* TITLE SECTION */}
      <div className="pl-40 pt-20">

        {/* Title with left border accent */}
        <h1 className="text-6xl font-bold text-blue-500 border-l-4 border-gray-400 pl-6">
          Community Wall
        </h1>

        {/* Subtitle / description */}
        <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
          Share ideas, experiences, and thoughts with fellow developers. 
          Learn together, inspire creativity, and build a supportive coding community.
        </p>

      </div>


      {/* MESSAGE INPUT AREA */}
      <div className="pl-40 mt-10 flex items-center gap-4">

        {/* Input field */}
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share something with the community..."
          className="w-[420px] bg-gray-900 border border-gray-800 rounded-xl px-6 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
        />

        {/* Post button */}
        <button
          onClick={addMessage}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-xl font-semibold transition shadow-lg"
        >
          Post
        </button>

      </div>


      {/* COMMUNITY POSTS */}
      <div className="pl-40 mt-14 flex gap-6 flex-wrap">

        {UserData.map((user, index) => (

          <div
            key={index}
            className="w-[420px] bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition duration-300"
          >

            {/* USER HEADER */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                  {user.name.charAt(0)}
                </div>

                {/* Username */}
                <h3 className="text-lg font-semibold text-white">
                  {user.name}
                </h3>

              </div>

              {/* Delete button */}
              <button
                onClick={() => deleteMessage(index)}
                className="text-sm text-red-400 hover:text-red-500 transition"
              >
                Delete
              </button>

            </div>

            {/* Message content */}
            <p className="text-gray-400 mt-3 leading-relaxed">
              {user.message}
            </p>

          </div>

        ))}

      </div>
    </div>
  );
} // now will backend logic to it !!