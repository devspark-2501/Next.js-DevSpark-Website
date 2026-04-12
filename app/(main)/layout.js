// import './globals.css';
// import "./globals.css"
// import NavBar from "./Component/NavBar"
// import Footer from "./Component/Footer"

// correct imports
import CircleChat from "../Component/CircleChat"
import CircleError from "../Component/CircleError"
import ShoppingIcon from "../Component/ShoppingIcon"

// import CircleError from "../Component/CircleError"
// import Footer from "../Component/Footer"
// import NavBar from "../Component/NavBar"

export const metadata = {
  title: "My Website",
  // description: "Created with Next.js",
}

export default function RootLayout({ children }) {
  return (
    <>
      {children} <CircleError /> <CircleChat /> <ShoppingIcon />
    </>
  )
}
