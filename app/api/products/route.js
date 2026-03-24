import { NextResponse } from "next/server";
import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(process.env.MONGODB_URI);
};

// schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: String,
    image: String
});

// model
const Product =
    mongoose.models.Product ||
    mongoose.model("Product", productSchema);

// GET Request
export async function GET() {
    try {
        await connectDB();

        const products = await Product.find();

        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// POST Request (ADD PRODUCT) ✅
export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const newProduct = await Product.create(body);

        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}