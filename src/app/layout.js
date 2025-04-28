import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Saleh Ahmad - Dev",
    description: "Seek to be whole, not perfect",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>Saleh Ahmad</title>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
