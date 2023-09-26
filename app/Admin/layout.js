import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin",
  description: "Home Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex-row bg-violet-100`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
