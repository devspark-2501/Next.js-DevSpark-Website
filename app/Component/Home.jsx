'use client'

import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function HomePage() {
    return (
        <div>
            <Link href="/">
                <button
                    className="fixed bottom-59 right-6 bg-black text-white p-4 shadow-2xl hover:opacity-90 transition rounded-full"
                >
                    <FaHome  size={22}/>
                </button>
            </Link>
        </div>
    )
}