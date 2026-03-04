import "./globals.css"
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";

export const metadata = {
  title: 'DevSpark Website'
}

export default function MainLayout( {children} ) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}