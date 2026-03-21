import clientPromise from "@/lib/db";

// CREATE (POST)
export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("myDB");

    const newUser = {
      name: body.name,
      role: body.role,
      tech: body.tech,
      github: body.github,
      message: body.message,
      createdAt: new Date(),
    };

    const result = await db.collection("users").insertOne(newUser);

    return Response.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}

// READ (GET)
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("myDB");

    const users = await db.collection("users").find({}).toArray();

    return Response.json(users);
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}










// let users = []; // temporary storage

// export async function POST(req) {
//   const body = await req.json();

//   const newUser = {

//     id: Date.now(),
//     name: body.name,
//     role: body.role,
//     tech: body.tech,
//     github: body.github,
//     message: body.message,
//   };

//   users.push(newUser);

//   console.log("New User:", newUser);

//   return Response.json({ message: "Data received", user: newUser });
// }

// // (optional) GET to see data
// export async function GET() {
//   return Response.json(users);
// }