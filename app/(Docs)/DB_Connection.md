import { NextResponse } from "next/server";
import mongoose from "mongoose";

// connect to DB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

// schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: String,
  image: String,
});

// prevent overwrite
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

// GET request
export async function GET() {
  try {
    await connectDB();

    const products = await Product.find();

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}