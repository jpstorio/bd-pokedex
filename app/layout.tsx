import "./globals.css";
import { Inter } from "next/font/google";
import { Kanit } from "next/font/google";

const kanit = Kanit({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] });

export const metadata = {
    title: "BD - Pokedex",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={kanit.className}>{children}</body>
        </html>
    );
}
