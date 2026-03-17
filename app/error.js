'use client'

export default function Error({ error, reset }) {
    return (
        <div className="h-screen bg-gray-950 text-white flex items-center justify-center px-6">
            <div className="max-w-lg w-full text-center">

                <h1 className="text-5xl font-semibold mb-2 tracking-tight">
                    Something went wrong
                </h1>

                <p className="text-gray-400 -tracking-tighter mb-2">
                    Oops! Something went wrong while loading this page. The problem may be caused by an unexpected error in the code, missing data, or a temporary issue with the server. Please try again or contact support if it continues.
                </p>

                <p className="text-gray-500 text-sm mb-8">
                    {error.message}
                </p>

                <button
                    onClick={() => reset()}
                    className="mt-2 px-6 py-3 bg-gray-950 text-gray-500 border-2 shadow-gray-950 shadow-2xl font-semibold rounded-3xl hover:opacity-70"
                >
                    Try again
                </button> {/* reset an JS property to make the web reload and restart the site */}

            </div>
        </div>
    )
}