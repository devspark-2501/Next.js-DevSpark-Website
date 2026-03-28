'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { useState } from "react"

export default function AuthStatus() {
  const { data: session } = useSession()
  const [error, setError] = useState("")

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-gray-900/70 border border-gray-800 rounded-3xl shadow-2xl p-8 text-center space-y-6">

        <h1 className="text-3xl font-bold">Auth Status</h1>

        {session ? (
          <div className="space-y-5">

            <p className="text-lg font-semibold">
              {session?.user?.email}
            </p>

            <button
              onClick={() => signOut()}
              className="w-full bg-red-600 py-2.5 rounded-xl"
            >
              Sign Out
            </button>

          </div>
        ) : (
          <div className="space-y-4">

            {/* Google */}
            <button
              onClick={() => signIn("google")}
              className="w-full flex items-center justify-center gap-2 bg-white text-black py-2.5 rounded-xl"
            >
              <FcGoogle /> Google
            </button>

            {/* GitHub */}
            <button
              onClick={() => signIn("github")}
              className="w-full flex items-center justify-center gap-2 bg-gray-800 py-2.5 rounded-xl"
            >
              <FaGithub /> GitHub
            </button>

            {/* Credentials Form */}
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                setError("")

                const email = e.target.email.value
                const password = e.target.password.value

                const res = await signIn("credentials", {
                  email,
                  password,
                  redirect: false,
                })

                if (!res.ok) {
                  setError("Invalid email or password")
                }
              }}
              className="space-y-3 pt-4"
            >
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded bg-gray-800"
                required
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 rounded bg-gray-800"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 py-2.5 rounded-xl"
              >
                Login
              </button>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
            </form>

          </div>
        )}
      </div>
    </main>
  )
}