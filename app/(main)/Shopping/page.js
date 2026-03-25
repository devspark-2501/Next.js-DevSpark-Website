'use client'

import { MdOutlineArrowRight } from "react-icons/md";
import { FaMobileAlt, FaTv, FaTshirt, FaLaptop, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useState, useEffect } from 'react'

export default function ShoppingPage() {
    const [open, setOpen] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const delay = setTimeout(async () => {
            const res = await fetch(`/api/ecommerce?search=${search}`, {
                cache: "no-store"
            });
            const data = await res.json();
            setFilteredProducts(data);
        }, 300);

        return () => clearTimeout(delay);
    }, [search]);

    return (
        <div className='min-h-screen bg-gray-950 text-white'>
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <div className="flex items-center gap-8">
                    <button 
                        onClick={() => setOpen(!open)}
                        className="flex flex-col justify-between w-9 h-7"
                    >
                        <span className={`h-1 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-3' : ''}`}></span>
                        <span className={`h-1 bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                        <span className={`h-1 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-3' : ''}`}></span>
                    </button>

                    <div className="hidden md:flex items-center gap-8 text-gray-300 text-base">
                        <div className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <FaMobileAlt /> <span>Mobiles</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <FaTv /> <span>TV</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <FaTshirt /> <span>Fashion</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                            <FaLaptop /> <span>Computers</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-[500px] bg-gray-800 rounded-xl overflow-hidden shadow-md">
                    <input 
                        type="text" 
                        placeholder="Search for products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 px-4 py-3 bg-transparent outline-none text-sm placeholder-gray-400"
                    />
                    <button className="bg-yellow-500 hover:bg-yellow-400 px-5 py-3 flex items-center justify-center">
                        <FaSearch className="text-black text-lg" />
                    </button>
                </div>

                <div className="flex items-center gap-6 text-xl">
                    <div className="cursor-pointer hover:text-gray-300 transition">
                        <FaUser />
                    </div>
                    <div className="relative cursor-pointer hover:text-gray-300 transition">
                        <FaShoppingCart />
                        <span className="absolute -top-2 -right-2 text-xs bg-red-500 px-1 rounded-full">
                            2
                        </span>
                    </div>
                </div>
            </div>

            <div className={`px-6 transition-all duration-300 ${open ? 'block' : 'hidden'}`}>
                <div className="bg-gray-950 p-4 rounded-lg w-72 shadow-sm shadow-gray-400 mt-4">
                    <h1 className='font-bold text-xl bg-gray-900 px-4 py-2 rounded'>
                        Trending
                    </h1>

                    <ul className="space-y-2 text-sm font-medium mt-2">
                        <li className="flex justify-between text-gray-400 hover:bg-gray-800 px-4 py-2 rounded-xl cursor-pointer">
                            <span>Bestsellers</span>
                            <MdOutlineArrowRight />
                        </li>
                        <li className="flex justify-between text-gray-400 hover:bg-gray-800 px-4 py-2 rounded-xl cursor-pointer">
                            <span>New Releases</span>
                            <MdOutlineArrowRight />
                        </li>
                        <li className="flex justify-between text-gray-400 hover:bg-gray-800 px-4 py-2 rounded-xl cursor-pointer">
                            <span>High Rated</span>
                            <MdOutlineArrowRight />
                        </li>
                    </ul>

                    <hr className='border-gray-600 opacity-60 mt-4' />
                
                    <h1 className='font-bold text-xl bg-gray-900 px-4 py-2 rounded mt-4'>
                        Shop by Category
                    </h1>
                </div>
            </div>

            <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product, i) => (
                    <div key={i} className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition">
                        <img 
                            src={product.image} 
                            className="h-32 mx-auto mb-3 object-contain"
                        />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-yellow-400 font-bold">${product.price}</p>
                        <p className="text-sm text-gray-400">⭐ {product.rating}</p>
                        <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}