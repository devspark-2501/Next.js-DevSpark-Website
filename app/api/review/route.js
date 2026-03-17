var reviews = [];

export async function GET() {
    return Response.json(reviews);
    // Response.json({name, message})
}

export async function POST(request) {
    const body = await request.json();

    const review = {
        id: Date.now(),
        userInput: body.message   
    };

    reviews.push(review);

    return Response.json(review); 
}