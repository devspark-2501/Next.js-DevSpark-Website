'use client'

import { MdOutlineArrowRight } from "react-icons/md";
import { FaMobileAlt, FaTv, FaTshirt, FaLaptop, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useState, useEffect } from 'react'

export default function ShoppingPage() {

    const [products, setProducts] = useState([]);              // original data
    const [filteredProducts, setFilteredProducts] = useState([]); // UI data
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    // FETCH + SEARCH
    useEffect(() => {
        const delay = setTimeout(async () => {
            const res = await fetch(`/api/ecommerce?search=${search}`, {
                cache: "no-store"
            });
            const data = await res.json();

            setProducts(data);           // store original
            setFilteredProducts(data);   // show results
        }, 300);

        return () => clearTimeout(delay);
    }, [search]);


    // FILTER: MOBILE
    const sortByMobile = () => {
        const filtered = products.filter(
            p => p.category === "mobile"
        );
        setFilteredProducts(filtered);
        setOpen(false); // optional: close sidebar
    };

    // FILTER: TV
    const sortByTv = () => {
        const sorted = products.filter(
            p => p.category === "tv"
        );
        setFilteredProducts(sorted)
    }

    // FILTER: FASHION
    const sortByFashion = () => {
        const sortDone = products.filter(
            p => p.category === "fashion"
        );
        setFilteredProducts(sortDone)
    }

    // FILTER: COMPUTER 
    const SortByComputer = () => {
        const sortFilter = products.filter(
            p => p.category === "computer"
        );
        setFilteredProducts(sortFilter)
    }

    // RESET FILTER
    const resetFilter = () => {
        setFilteredProducts(products);
    };

    return (
        <div className='min-h-screen bg-gray-950 text-white'>

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">

                <div className="flex items-center gap-8">

                    {/* HAMBURGER */}
                    <button 
                        onClick={() => setOpen(!open)}
                        className="flex flex-col justify-between w-9 h-7"
                    >
                        <span className={`h-1 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-3' : ''}`}></span>
                        <span className={`h-1 bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                        <span className={`h-1 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-3' : ''}`}></span>
                    </button>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-8 text-gray-300 text-base">
                        
                        <div
                            onClick={sortByMobile}
                            className="flex items-center gap-2 hover:text-white cursor-pointer"
                        >
                            <FaMobileAlt /> <span>Mobiles</span>
                        </div>
                        

                        <div
                            onClick={sortByTv} 
                            className="flex items-center gap-2 hover:text-white cursor-pointer">
                            <FaTv /> <span>TV</span>
                        </div>

                        <div
                            onClick={sortByFashion} 
                            className="flex items-center gap-2 hover:text-white cursor-pointer">
                            <FaTshirt /> <span>Fashion</span>
                        </div>

                        <div
                            onClick={SortByComputer} 
                            className="flex items-center gap-2 hover:text-white cursor-pointer">
                            <FaLaptop /> <span>Computers</span>
                        </div>
                    </div>
                </div>

                {/* SEARCH */}
                <div className="flex items-center w-[500px] bg-gray-800 rounded-xl overflow-hidden">
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

                {/* ICONS */}
                <div className="flex items-center gap-6 text-xl">
                    <FaUser className="cursor-pointer hover:text-gray-300" />

                    <div className="relative cursor-pointer hover:text-gray-300">
                        <FaShoppingCart />
                        <span className="absolute -top-2 -right-2 text-xs bg-red-500 px-1 rounded-full">
                            2
                        </span>
                    </div>
                </div>
            </div>

            {/* SIDEBAR + OVERLAY */}
            <>
                {/* OVERLAY */}
                <div 
                    className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    onClick={() => setOpen(false)}
                />

                {/* SIDEBAR */}
                <div className={`fixed top-0 left-0 h-full w-72 bg-gray-950 z-50 transform transition-transform duration-300 
                    ${open ? 'translate-x-0' : '-translate-x-full'}`}>

                    <div className="p-4">

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

                        {/* CATEGORY FILTER */}
                        <div className="mt-3 space-y-2">
                            {/*
                                <div 
                                    onClick={sortByMobile}
                                    className="cursor-pointer hover:bg-gray-800 px-3 py-2 rounded"
                                >
                                    📱 Mobile
                                </div>
                            */}
                            <div 
                                onClick={resetFilter}
                                className="cursor-pointer hover:bg-gray-800 px-3 py-2 rounded"
                            >
                                🔄 All Products
                            </div>
                        </div>

                    </div>
                </div>
            </>

            {/* PRODUCTS */}
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