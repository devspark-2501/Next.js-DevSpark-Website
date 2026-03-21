let users = []; // temporary storage

export async function POST(req) {
  const body = await req.json();

  const newUser = {
    id: Date.now(),
    name: body.name,
    role: body.role,
    tech: body.tech,
    github: body.github,
    message: body.message,
  };

  users.push(newUser);

  console.log("New User:", newUser);

  return Response.json({ message: "Data received", user: newUser });
}

// (optional) GET to see data
export async function GET() {
  return Response.json(users);
}