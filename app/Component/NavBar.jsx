import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="w-full bg-gray-900 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                
                <h1 className="text-2xl font-bold tracking-wide text-blue-400">
                    DevSpark
                </h1>

                <ul className="flex gap-8 text-lg font-medium">
                    <Link href='/Home' className='"hover:text-blue-400 cursor-pointer transition duration-300'>Home</Link>

                    <Link href='/Home' className='"hover:text-blue-400 cursor-pointer transition duration-300'>About</Link>
                    
                    <Link href='/Home' className='"hover:text-blue-400 cursor-pointer transition duration-300'>Contact</Link>
                    
                    <Link href='/Home' className='"hover:text-blue-400 cursor-pointer transition duration-300'>Projects</Link>
                </ul>

            </div>
        </nav>
    )
}