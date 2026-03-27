import "./globals.css"
import NavBar from "./Component/NavBar"
import Footer from "./Component/Footer"
import SessionWrapper from "./Component/SessionWrapper"

export const metadata = {
  title: {
    default: "DevSpark Website",
    template: "DevSpark Website"
  }
}

export default function RootLayout({ children }) {

  // throw new Error(""); {/* this line of code trigger global-error.js */}

  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <SessionWrapper>
          <NavBar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  )
}

