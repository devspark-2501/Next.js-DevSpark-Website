'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthStatus() {
  const { data: session } = useSession()

  return (
    <main className="pt-28 text-center">
      {session ? (
        <>
          Signed in as {session?.user?.email || "No email"} <br />
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn("google")}>
            Sign in with Google
          </button>
          <button onClick={() => signIn("github")}>
            Sign in with GitHub
          </button>
        </>
      )}
    </main>
  )
}