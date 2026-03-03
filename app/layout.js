import "./globals.css"
import NavBar from "./Component/NavBar";

export default function RootLayout( {children} ) {
  return (
    <html lang="e">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}