import mongoose from "mongoose";
import { NextResponse } from "next/server";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(process.env.MONGODB_URI);
};

export async function GET(request) {
    try {
        await connectDB();

        const db = mongoose.connection.db;

        const { searchParams } = new URL(request.url);
        const search = searchParams.get("search");

        let query = {};

        if (search) {
            query.name = { $regex: search, $options: "i" };
        }

        const ecommerceData = await db
            .collection("ecommerce")
            .find(query)
            .toArray();

        const productsData = await db
            .collection("products")
            .find(query)
            .toArray();

        const combined = [...ecommerceData, ...productsData];

        return NextResponse.json(combined);

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Server Error" },
            { status: 500 }
        );
    }
    
}