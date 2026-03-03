export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
                
                <h2 className="text-lg font-semibold text-blue-400">
                    DevSpark
                </h2>

                <p className="text-sm text-gray-400 mt-4 md:mt-0">
                    © {new Date().getFullYear()} DevSpark. All rights reserved.
                </p>

                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="hover:text-blue-400 cursor-pointer transition">
                        Privacy
                    </span>
                    <span className="hover:text-blue-400 cursor-pointer transition">
                        Terms
                    </span>
                    <span className="hover:text-blue-400 cursor-pointer transition">
                        Contact
                    </span>
                </div>

            </div>
        </footer>
    )
}