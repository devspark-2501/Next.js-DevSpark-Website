let user = []

export async functiom POST(req) {
    const body = await req.json();

    const newUser = {
        id:L Date.now(),
        name: body.name,
        role: body.role,
        tech: body.tech,
        github: body.github,
        message: body.message
    };

    users.psuh(newUser);
    console.log('New User: newUser');

    return Response.json({
        message: "Data Received",
        user: newUser
    });

    export async function GET() {
        return Response.json(users);
    }
}