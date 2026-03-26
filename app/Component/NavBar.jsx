'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function NavBar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle = (path) =>
    pathname === path
      ? "bg-gray-900 text-white px-4 py-2 rounded-full text-xl opacity-60"
      : "hover:bg-gray-900 rounded-full px-3 py-2 text-xl hover:opacity-30"

  return (
    <nav className="w-full bg-gray-950 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href='/'>
          <h1 className="text-4xl font-bold tracking-wide text-blue-400 pt-2 cursor-pointer">
            DevSpark
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <Link href='/' className={linkStyle('/')}>Home</Link>
          <Link href='/About' className={linkStyle('/About')}>About</Link>
          <Link href='/Contact' className={linkStyle('/Contact')}>Contact</Link>
          <Link href='/Projects' className={linkStyle('/Projects')}>Projects</Link>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              // X icon
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-900 px-6 py-4 flex flex-col gap-4 text-lg font-medium">
          <Link href='/' className={linkStyle('/')} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href='/About' className={linkStyle('/About')} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href='/Contact' className={linkStyle('/Contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href='/Projects' className={linkStyle('/Projects')} onClick={() => setMenuOpen(false)}>Projects</Link>
        </ul>
      )}
    </nav>
  )
}