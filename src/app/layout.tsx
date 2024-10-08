import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {ThemeProvider} from "@/themes/ThemeProvider";
import Footer from '@/components/Footer';

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'JoshiCodes.de',
    description: 'JoshiCodes.de - Personal Website',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <ThemeProvider />
            <body className={inter.className}>
                {children}
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    )
}
