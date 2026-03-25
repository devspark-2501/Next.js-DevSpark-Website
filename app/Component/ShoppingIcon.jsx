'use client'

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function ShoppingIcon() {
    return (
        <div>
            <Link href="/Shopping">
                <button
                    className="fixed bottom-42 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700"
                >
                    <FaShoppingCart size={22} />
                </button>
            </Link>
        </div>
    )
}