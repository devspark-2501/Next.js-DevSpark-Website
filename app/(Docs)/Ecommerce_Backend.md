export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const newProduct = await Product.create(body);

        return NextResponse.json(newProduct, { status:201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, {status: 500})
    }
}


// HTTP Status Codes:

🔢 1. 1xx – Informational

These are rare in normal apps.

100 Continue → Request received, keep going
101 Switching Protocols → Server is switching (e.g., HTTP → WebSocket)

👉 Mostly used internally, you won’t debug these much.

✅ 2. 2xx – Success

Everything worked 👍

200 OK → Request successful
201 Created → Resource created (common in APIs when you POST data)
204 No Content → Success but nothing to return

💡 Example: User signup → returns 201 Created

🔁 3. 3xx – Redirection

Client needs to do something extra (usually redirect)

301 Moved Permanently → URL changed forever
302 Found → Temporary redirect
304 Not Modified → Cached version is still valid
⚠️ 4. 4xx – Client Errors

Problem is on the user/client side

400 Bad Request → Invalid request (missing fields, bad JSON)
401 Unauthorized → Not logged in
403 Forbidden → Logged in but no permission
404 Not Found → Resource doesn’t exist
405 Method Not Allowed → Wrong HTTP method (e.g., GET instead of POST)
409 Conflict → Duplicate or conflicting data
422 Unprocessable Entity → Validation error

💡 Example:
Trying to open a non-existing page → 404

💥 5. 5xx – Server Errors

Problem is on the backend/server side

500 Internal Server Error → Something broke in code
501 Not Implemented → Feature not supported
502 Bad Gateway → Server got bad response from another server
503 Service Unavailable → Server down or overloaded
504 Gateway Timeout → Another server didn’t respond in time

💡 Example:
Database crash → 500 or 503