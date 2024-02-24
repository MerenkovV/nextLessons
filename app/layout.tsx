import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

const NavLinks = [
  {label: 'about', href: '/about'},
  {label: 'price', href: '/price'},
  {label: 'blog', href: '/blog'},
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Link href="/" className="logo">
            <Image
            src='/next.svg'
            alt="Logo"
            width={100}
            height={30}
          /></Link>
          <ul className="menu">
            <Navigation NavLinks={NavLinks}/>
            {/* <li><Link href="/about">about</Link></li>
            <li><Link href="/price">price</Link></li>
            <li><Link href="/blog">blog</Link></li> */}
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}
