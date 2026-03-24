'use client'

import { useState } from "react"
import { BsChatDotsFill } from "react-icons/bs"
import { IoSend } from "react-icons/io5"

export default function CircleChat() {

    const [open, setOpen] = useState(false);

    return (
        <div>

            {/* Chat Window */}
            {open && (
                <div className="fixed bottom-40 right-6 w-80 h-96 bg-white shadow-2xl rounded-2xl border flex flex-col overflow-hidden">

                    {/* Header */}
                    <div className="bg-green-500 text-white p-3 font-semibold">
                        Chat Support
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-gray-50">

                        {/* Bot Message */}
                        <div className="flex">
                            <div className="bg-gray-200 text-sm px-3 py-2 rounded-xl max-w-[70%] text-gray-600">
                                Hello 👋 How can I help you?
                            </div>
                        </div>


                    </div>

                    {/* Input Area */}
                    <div className="p-2 border-t flex items-center gap-2 bg-white">

                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 text-sm border rounded-full px-3 py-2 outline-none border-green-500 text-gray-600"
                        />

                        <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
                            <IoSend size={18} />
                        </button>

                    </div>
                </div>
            )}

            {/* Floating Chat Button */}
            <button
                onClick={() => setOpen(!open)}
                className={`fixed bottom-24 right-6 text-white p-4 rounded-full shadow-2xl transition
                ${open ? "bg-green-500 hover:bg-green-600" : "bg-green-500 hover:bg-green-600"}`}
            >
                <BsChatDotsFill size={22} />
            </button>

        </div>
    )
}