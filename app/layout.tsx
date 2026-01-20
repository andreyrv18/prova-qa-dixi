import type { Metadata } from 'next';
import { Open_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Open_Sans({
    variable: '--font-open-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-open-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Prova QA',
    description: 'Prova QA 2026 Batida de ponto',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
