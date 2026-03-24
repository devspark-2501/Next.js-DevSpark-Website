import { IoFilter } from "react-icons/io5";
import { FaTag } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";
import { Assets } from "../assets/asset"; // updated
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Estore() {

    /*
        const products = [
            { name: "Black Headphones", price: "$120", stock: "In Stock", img: Assets.Black_Headphones },
            { name: "Blue Headphones", price: "$110", stock: "In Stock", img: Assets.Blue_Headphones },
            { name: "Gaming Keyboard", price: "$150", stock: "Low Stock", img: Assets.Gaming_Keyboard },
            { name: "Keyboard", price: "$80", stock: "In Stock", img: Assets.Keyboard },
            { name: "Monitor", price: "$300", stock: "In Stock", img: Assets.Monitor },
            { name: "Mouse", price: "$40", stock: "In Stock", img: Assets.Mouse },
            { name: "Red Headphones", price: "$130", stock: "Out of Stock", img: Assets.Red_Headphones },
            { name: "White Keyboard", price: "$90", stock: "In Stock", img: Assets.White_Keyboard },
            { name: "Black Headphones 2", price: "$140", stock: "In Stock", img: Assets.Black2_Headphones },
            { name: "Blue Headphones 2", price: "$135", stock: "Low Stock", img: Assets.Blue2_Headphones },
        ];
    */

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // ✅ new

    // fetch products from backend
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("/api/products");
            const data = await res.json();

            setProducts(data);
            setFilteredProducts(data); // ✅ important
        };

        fetchProducts();
    }, []);

    // ✅ SORT BY PRICE
    const sortByPrice = () => {
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
        <div className="bg-gray-950 min-h-screen text-white p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="pb-6">
                    <h1 className="text-6xl font-extrabold text-blue-500 leading-tight">
                        <span className="relative inline-block mr-3">
                            Our
                            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-8 h-1 bg-gray-400 rounded-full"></span>
                        </span>
                        Ecommerce
                    </h1>
                </div>

                <div className="relative group">
                    <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
                        Filter <IoFilter />
                    </button>

                    <div className="absolute right-0 mt-2 w-44 bg-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                        
                        {/* ✅ PRICE FILTER */}
                        <div 
                            onClick={sortByPrice}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 cursor-pointer">
                            <FaTag className="text-blue-400" />
                            <span>Price</span>
                        </div>

                        {/* ✅ STOCK FILTER */}
                        <div 
                            onClick={filterInStock}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 cursor-pointer">
                            <MdInventory className="text-green-400" />
                            <span>In Stock</span>
                        </div>

                        {/* ✅ STOCK FILTER */}
                        <div
                            onClick={filterOutOfStock}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 cursor-pointer">
                            <PiWarehouseFill className="text-red-600" />
                            <span>Out Of Stock</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (  // ✅ changed here
                    <div key={index} className="bg-gray-900 rounded-xl p-4 hover:scale-105 hover:shadow-lg transition">
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

                        <button className="mt-3 w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-500">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}