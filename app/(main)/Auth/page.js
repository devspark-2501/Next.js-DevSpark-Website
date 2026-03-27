'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

export default function AuthStatus() {
  const { data: session } = useSession()

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center px-4 relative overflow-hidden">

      
      {/* <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" /> */}

      
      <div className="relative w-full max-w-md backdrop-blur-xl bg-gray-900/70 border border-gray-800 rounded-3xl shadow-2xl p-8 text-center space-y-6">

        
        <h1 className="text-3xl font-bold tracking-tight">
          Auth Status
        </h1>

        {session ? (
          <div className="space-y-5">

            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold">
                {session?.user?.email?.[0]?.toUpperCase() || "U"}
              </div>

              <p className="text-gray-400 text-sm">
                Signed in as
              </p>

              <p className="text-lg font-semibold break-words">
                {session?.user?.email || "No email"}
              </p>
            </div>

            <button
              onClick={() => signOut()}
              className="w-full bg-red-600 hover:bg-red-500 active:scale-95 transition-all duration-200 text-white font-medium py-2.5 rounded-xl shadow-md"
            >
              Sign Out
            </button>

          </div>
        ) : (
          <div className="space-y-5">

            <p className="text-gray-400 text-sm">
              You are not signed in
            </p>

            <div className="space-y-3">

              {/* Google Button */}
              <button
                onClick={() => signIn("google")}
                className="w-full flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-200 active:scale-95 transition-all duration-200 font-medium py-2.5 rounded-xl shadow-md"
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>

              {/* GitHub Button */}
              <button
                onClick={() => signIn("github")}
                className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 active:scale-95 transition-all duration-200 text-white font-medium py-2.5 rounded-xl border border-gray-700 shadow-md"
              >
                <FaGithub size={20} />
                Continue with GitHub
              </button>

            </div>

          </div>
        )}
      </div>
    </main>
  )
}