import { Inter } from "next/font/google";
import "./globals.css";
 
import Footer from "./common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoutes from "./common/ProtectedRounts";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Escrow Services - Escrow.com",
  description:"When you use Escrow.com for your transactions, you can take comfort in knowing you can buy and sell virtually anything all over the world because our safe and simple payment process is licensed, regulated, and guaranteed."
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <ProtectedRoutes>{children}</ProtectedRoutes>
        
        <Footer />
      </body>
    </html>
  );
}
