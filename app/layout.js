import "./globals.css"
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";

export default function RootLayout( {children} ) {
  return (
    <html lang="e">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}