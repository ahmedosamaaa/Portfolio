import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

interface Metadata {
    title: {
        template: string;
        default: string;
    };
    description: string;
}

export const metadata: Metadata = {
    title: {
        template: "Welcome - Ahmed's Portfolio",
        default: "Welcome - Ahmed's Portfolio",
    },
    description: "Transforming Concepts into Seamless User Experiences",
};

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <FloatingNav navItems={navItems} />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
