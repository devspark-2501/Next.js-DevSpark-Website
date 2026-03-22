import { IoFilter } from "react-icons/io5"; // react filter icon 
import { Assets } from "../(asset)/asset.js";
// import { Assets } from "../(asset)/asset";
// import { Assets } from "../(asset)/asset";

export default function Estore() {

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

    return (
        <div className="bg-gray-950 min-h-screen text-white p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="pb-6">
  {/* <p className="text-gray-400 text-2xl pl-8 uppercase tracking-wide">
    Visit
  </p> */}
                    <h1 className="text-6xl font-extrabold text-blue-500 leading-tight">
                        <span className="relative inline-block mr-3">
                            Our
                            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-8 h-1 bg-gray-400 rounded-full"></span>
                        </span>
                        Ecommerce
                    </h1>
                </div>            
                {/* <span className="text-gray-400 text-lg mt-4">Visit<h1 className="text-6xl font-bold text-blue-500 pb-10 border-t-2 border-gray-400 pt-4"> Our Ecommerce.</h1></span> */}
                <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
                    Filter <IoFilter />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl p-4 hover:scale-105 transition">
                        <img src={product.img} alt={product.name} className="w-full h-40 object-contain mb-4" />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-400">{product.price}</p>
                        <p className={`text-sm ${product.stock === "Out of Stock" ? "text-red-500" : "text-green-500"}`}>
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