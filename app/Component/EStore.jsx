'use client'; // make sure it's client component
import { MdAddBox } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { FaTag } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Estore() {

    /*
        const products = [
            { name: "Black Headphones", price: "$120", stock: "In Stock", img: Assets.Black_Headphones },
            ...
        ];
    */

    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // ✅ fixed

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "in stock",
        image: ""
    });

    // fetch products from backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/products");
                const data = await res.json();

                console.log("API DATA:", data); // 🔍 debug

                // ✅ FIX: ensure array
                const productArray = Array.isArray(data)
                    ? data
                    : data.products || [];

                setProducts(productArray); // safe fallback
                setFilteredProducts(productArray);
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setProducts([]);
                setFilteredProducts([]);
            }
        };

        fetchProducts();
    }, []);

    // ✅ HANDLE INPUT CHANGE
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // ✅ SUBMIT TO BACKEND
    const handleSubmit = async () => {
        try {
            await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    price: Number(formData.price)
                })
            });

            setOpen(false);

            // refresh UI
            const res = await fetch("/api/products");
            const data = await res.json();

            console.log("REFETCH DATA:", data); // 🔍 debug

            // ✅ FIX: ensure array
            const productArray = Array.isArray(data)
                ? data
                : data.products || [];

            setProducts(productArray);
            setFilteredProducts(productArray);
        } catch (error) {
            console.error("Failed to submit product:", error);
        }
    };

    // ✅ SORT BY PRICE
    const sortByPrice = () => {
        if (!Array.isArray(filteredProducts)) return; // 🛡️ safety
        const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
        setFilteredProducts(sorted);
    };

    // ✅ FILTER IN STOCK
    const filterInStock = () => {
        const filtered = products.filter(p => p.stock === "in stock");
        setFilteredProducts(filtered);
    };

    // ✅ FILTER OUT OF STOCK
    const filterOutOfStock = () => {
        const notStock = products.filter(a => a.stock === "out of stock");
        setFilteredProducts(notStock);
    };

    return (
        <>
            {/* MAIN PAGE */}
            <div className="bg-gray-950 min-h-screen text-white p-6">

                <style>
                    {`
                        input[type="number"]::-webkit-outer-spin-button,
                        input[type="number"]::-webkit-inner-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                        }

                        input[type="number"] {
                            -moz-appearance: textfield;
                        }
                    `}
                </style>

                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-6xl font-extrabold text-blue-500">
                        Our Ecommerce
                    </h1>

                    <div className="flex gap-4">

                        {/* ADD PRODUCT BUTTON */}
                        <button 
                            onClick={() => setOpen(!open)}
                            className="flex items-center bg-gray-800 px-5 py-2 rounded-lg hover:bg-gray-700"
                        >
                            Add Product&nbsp;<MdAddBox />
                        </button>

                        {/* FILTER DROPDOWN */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
                                Filter <IoFilter />
                            </button>

                            <div className="absolute right-0 mt-2 w-44 bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                                
                                <div onClick={sortByPrice} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 cursor-pointer">
                                    <FaTag className="text-blue-400" />
                                    Price
                                </div>

                                <div onClick={filterInStock} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 cursor-pointer">
                                    <MdInventory className="text-green-400" />
                                    In Stock
                                </div>

                                <div onClick={filterOutOfStock} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 cursor-pointer">
                                    <PiWarehouseFill className="text-red-500" />
                                    Out Of Stock
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.isArray(filteredProducts) && filteredProducts.map((product, index) => ( // ✅ FIXED SAFETY
                        <div key={index} className="bg-gray-900 rounded-xl p-4 hover:scale-105 transition">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={200}
                                className="w-full h-40 object-contain mb-4"
                            />

                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-400">${product.price}</p>
                            <p className={`text-sm ${product.stock === "out of stock" ? "text-red-500" : "text-green-500"}`}>
                                {product.stock}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ✅ MODAL (OUTSIDE MAIN DIV → THIS FIXES YOUR BUG) */}
            {open && (
                <>
                    {/* BACKDROP */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setOpen(false)}
                    />

                    {/* MODAL */}
                    <div className="fixed top-24 right-6 bg-gray-900 p-4 w-64 rounded-2xl flex flex-col gap-3 border-2 border-gray-400 z-50">

                        <input 
                            name="name"
                            placeholder="Product Name"
                            type="text"
                            onChange={handleChange}
                            className="bg-gray-800 text-white px-3 py-2 rounded-full"
                        />

                        <input 
                            name="price"
                            type="number"
                            placeholder="Product Price"
                            onChange={handleChange}
                            className="bg-gray-800 text-white px-3 py-2 rounded-full"
                        />

                        <input 
                            name="stock"
                            placeholder="in stock / out of stock"
                            onChange={handleChange}
                            className="bg-gray-800 text-white px-3 py-2 rounded-full"
                        />

                        <input 
                            name="image"
                            placeholder="/Mouse.png"
                            onChange={handleChange}
                            className="bg-gray-800 text-white px-3 py-2 rounded-full"
                        />

                        <button 
                            onClick={handleSubmit}
                            className="bg-green-500 hover:opacity-60 py-2 rounded-full"
                        >
                            Upload
                        </button>
                    </div>
                </>
            )}
        </>
    );
}