import mongoose from 'mongoose'
import { nextResponse } from 'next/server'

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(process.env.MONGODB_URI);
};

export async function GET(request) {
    try {
        await connectDB();

        const db = mongoose.connection.db;

        const { searchParams } = new URL(request.url);
        const search = searchParams.get('search');

        let query = {};

        if (search) {
            quey.name = { $regex: search, $options: "i" }'
        }

        const products = await db
            .collection('ecommerce')
            .find(query)
            .toArray();

        console.log("DB:", mongoose.connection.name);
        console.log("Collection: ecommerce");

        return NextResponse.json(products);

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Server Error" },
            { status: 500 }
        );
    }
}